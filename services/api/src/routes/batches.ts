import { Router } from 'express';
import { z } from 'zod';
import QRCode from 'qrcode';
import { authMiddleware, requireRole } from '../middleware/auth.js';
import { BatchModel } from '../models/Batch.js';
import { blockchainService } from '../services/blockchain.js';
import { sha256Hex, stableStringify } from '../utils/crypto.js';

const router = Router();

const createBatchSchema = z.object({
  name: z.string().min(2),
  weightKg: z.number().positive(),
  harvestDate: z.string().transform((s) => new Date(s)),
  location: z.object({ lat: z.number(), lng: z.number() })
});

router.post('/', authMiddleware, requireRole('farmer'), async (req: any, res) => {
  const parse = createBatchSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error.flatten() });

  const farmerId = req.user!.sub;

  // Create a provisional batch (without blockchain/QR)
  const provisional = await BatchModel.create({
    farmerId,
    name: parse.data.name,
    weightKg: parse.data.weightKg,
    harvestDate: parse.data.harvestDate,
    location: parse.data.location,
    blockchainHash: 'pending',
    blockchainTxId: 'pending',
    qrCodeDataUrl: 'pending'
  });

  const batchId = String(provisional._id);

  const canonicalPayload = {
    batchId,
    farmerId,
    name: parse.data.name,
    weightKg: parse.data.weightKg,
    harvestDate: parse.data.harvestDate.toISOString(),
    location: parse.data.location
  };

  const dataHash = sha256Hex(stableStringify(canonicalPayload));
  const commit = await blockchainService.commitRecord(batchId, dataHash, canonicalPayload);

  const qrPayload = { type: 'herbchain-batch', batchId };
  const qrCodeDataUrl = await QRCode.toDataURL(JSON.stringify(qrPayload));

  provisional.blockchainHash = dataHash;
  provisional.blockchainTxId = commit.txId;
  provisional.qrCodeDataUrl = qrCodeDataUrl;
  await provisional.save();

  return res.status(201).json({ batch: provisional, consensus: commit.consensusAchieved });
});

router.get('/', authMiddleware, async (req: any, res) => {
  const role = req.user!.role;
  const userId = req.user!.sub;
  const query = role === 'farmer' ? { farmerId: userId } : {};
  const batches = await BatchModel.find(query).sort({ createdAt: -1 });
  return res.json({ batches });
});

router.get('/:id', authMiddleware, async (req, res) => {
  const batch = await BatchModel.findById(req.params.id);
  if (!batch) return res.status(404).json({ error: 'Not found' });

  const verification = await blockchainService.verifyRecord(String(batch._id), batch.blockchainHash);
  return res.json({ batch, verification });
});

export default router;
