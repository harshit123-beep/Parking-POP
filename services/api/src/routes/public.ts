import { Router } from 'express';
import { BatchModel } from '../models/Batch.js';
import { blockchainService } from '../services/blockchain.js';
import { sha256Hex, stableStringify } from '../utils/crypto.js';

const router = Router();

router.get('/scan/:batchId', async (req, res) => {
  const { batchId } = req.params;
  const batch = await BatchModel.findById(batchId);
  if (!batch) return res.status(404).json({ error: 'Not found' });

  const payload = {
    batchId: String(batch._id),
    farmerId: String(batch.farmerId),
    name: batch.name,
    weightKg: batch.weightKg,
    harvestDate: batch.harvestDate.toISOString(),
    location: batch.location
  } as const;

  const expectedHash = sha256Hex(stableStringify(payload));
  const verification = await blockchainService.verifyRecord(String(batch._id), expectedHash);

  return res.json({
    authenticity: verification.consensus,
    verification,
    batch: {
      id: String(batch._id),
      name: batch.name,
      weightKg: batch.weightKg,
      harvestDate: batch.harvestDate,
      location: batch.location,
      qrCodeDataUrl: batch.qrCodeDataUrl
    }
  });
});

export default router;
