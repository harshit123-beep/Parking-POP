import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { env } from './config/env.js';
import authRoutes from './routes/auth.js';
import batchRoutes from './routes/batches.js';
import publicRoutes from './routes/public.js';

async function start() {
  await mongoose.connect(env.mongodbUri);

  const app = express();
  app.use(cors({ origin: env.corsOrigin }));
  app.use(express.json());
  app.use(morgan('dev'));

  app.get('/health', (_req, res) => res.json({ ok: true }));

  app.use('/auth', authRoutes);
  app.use('/batches', batchRoutes);
  app.use('/public', publicRoutes);

  app.listen(env.port, () => {
    console.log(`HerbChain API running on port ${env.port}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server', err);
  process.exit(1);
});
