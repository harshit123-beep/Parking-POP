import 'dotenv/config';

export const env = {
  port: parseInt(process.env.PORT || '4000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  jwtSecret: process.env.JWT_SECRET || 'dev_secret',
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/herbchain',
  ipfsApiUrl: process.env.IPFS_API_URL || 'http://localhost:5001',
  blockchainNodeCount: parseInt(process.env.BLOCKCHAIN_NODE_COUNT || '3', 10),
  blockchainConsensusThreshold: parseInt(process.env.BLOCKCHAIN_CONSENSUS_THRESHOLD || '2', 10)
} as const;

export type AppEnv = typeof env;
