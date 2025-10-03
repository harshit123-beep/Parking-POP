import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { env } from '../config/env.js';
import { UserModel } from '../models/User.js';

const router = Router();

const otpStore = new Map<string, { code: string; expiresAt: number }>();

function normalizeLoginId(input: string): string {
  const value = input.trim();
  if (value.includes('@')) return value.toLowerCase();
  return value.replace(/\D/g, '');
}

function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

router.post('/request-otp', async (req, res) => {
  const schema = z.object({ loginId: z.string().min(5) });
  const parse = schema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error.flatten() });

  const loginId = normalizeLoginId(parse.data.loginId);
  const code = generateOtp();
  const ttlMs = 5 * 60 * 1000;
  otpStore.set(loginId, { code, expiresAt: Date.now() + ttlMs });

  // TODO: Integrate SMS/Email provider. For dev, return the OTP.
  return res.json({ ok: true, loginId, otp: code, dev: env.nodeEnv !== 'production' });
});

router.post('/verify-otp', async (req, res) => {
  const schema = z.object({ loginId: z.string().min(5), otp: z.string().length(6) });
  const parse = schema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error.flatten() });

  const loginId = normalizeLoginId(parse.data.loginId);
  const record = otpStore.get(loginId);
  if (!record || record.expiresAt < Date.now() || record.code !== parse.data.otp) {
    return res.status(400).json({ error: 'Invalid or expired OTP' });
  }

  // Upsert user as farmer by default
  let user = await UserModel.findOne({ $or: [{ phone: loginId }, { email: loginId }] });
  if (!user) {
    user = await UserModel.create(loginId.includes('@') ? { email: loginId, role: 'farmer' } : { phone: loginId, role: 'farmer' });
  }

  const token = jwt.sign({ sub: String(user._id), role: user.role }, env.jwtSecret, { expiresIn: '7d' });
  return res.json({ token, user: { id: String(user._id), role: user.role, phone: user.phone, email: user.email } });
});

export default router;
