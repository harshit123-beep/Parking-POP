import { env } from '../config/env.js';

export type LedgerEntry = {
  batchId: string;
  dataHash: string;
  payload: Record<string, unknown>;
  txId: string;
  committedAt: string;
  nodeId: string;
};

class BlockchainMockService {
  private nodeLedgers: Map<string, Map<string, LedgerEntry>> = new Map();
  private nodeIds: string[] = [];
  private consensusThreshold: number;

  constructor(nodeCount: number, threshold: number) {
    this.consensusThreshold = threshold;
    for (let i = 0; i < nodeCount; i++) {
      const nodeId = `node-${i + 1}`;
      this.nodeIds.push(nodeId);
      this.nodeLedgers.set(nodeId, new Map());
    }
  }

  async commitRecord(batchId: string, dataHash: string, payload: Record<string, unknown>) {
    const txId = `tx_${Math.random().toString(36).slice(2, 10)}`;
    const committedAt = new Date().toISOString();

    let writeCount = 0;
    const entryByNode: LedgerEntry[] = [];

    for (const nodeId of this.nodeIds) {
      const ledger = this.nodeLedgers.get(nodeId)!;
      const entry: LedgerEntry = { batchId, dataHash, payload, txId, committedAt, nodeId };
      ledger.set(batchId, entry);
      entryByNode.push(entry);
      writeCount++;
    }

    const consensusAchieved = writeCount >= this.consensusThreshold;
    return { txId, committedAt, consensusAchieved, entries: entryByNode };
  }

  async verifyRecord(batchId: string, expectedHash: string) {
    let agree = 0;
    let total = 0;
    let sample: LedgerEntry | undefined;

    for (const nodeId of this.nodeIds) {
      const ledger = this.nodeLedgers.get(nodeId)!;
      const entry = ledger.get(batchId);
      if (entry) {
        total++;
        sample = entry;
        if (entry.dataHash === expectedHash) {
          agree++;
        }
      }
    }

    const consensus = agree >= this.consensusThreshold;
    return { consensus, agree, total, sample };
  }

  async getRecord(batchId: string) {
    for (const nodeId of this.nodeIds) {
      const entry = this.nodeLedgers.get(nodeId)!.get(batchId);
      if (entry) return entry;
    }
    return undefined;
  }
}

export const blockchainService = new BlockchainMockService(
  env.blockchainNodeCount,
  env.blockchainConsensusThreshold
);
