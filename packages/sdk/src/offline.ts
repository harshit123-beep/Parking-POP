import type { CreateBatchRequest, CreateBatchResponse } from '@herbchain/types';
import { HerbChainClient } from './client.js';
import { detectStorage } from './storage.js';

export type OfflineQueueItem = {
  id: string;
  type: 'CREATE_BATCH';
  payload: CreateBatchRequest;
  createdAt: string;
};

const QUEUE_KEY = 'herbchain_offline_queue_v1';

export class OfflineSyncManager {
  private storage = detectStorage();
  private isSyncing = false;

  constructor(private client: HerbChainClient) {}

  async enqueueCreateBatch(payload: CreateBatchRequest): Promise<OfflineQueueItem> {
    const item: OfflineQueueItem = {
      id: `q_${Math.random().toString(36).slice(2, 10)}`,
      type: 'CREATE_BATCH',
      payload,
      createdAt: new Date().toISOString()
    };
    const queue = await this.loadQueue();
    queue.push(item);
    await this.saveQueue(queue);
    return item;
  }

  async trySync(): Promise<{ synced: number; remaining: number }> {
    if (this.isSyncing) return { synced: 0, remaining: (await this.loadQueue()).length };
    this.isSyncing = true;
    try {
      let queue = await this.loadQueue();
      let synced = 0;
      const remaining: OfflineQueueItem[] = [];

      for (const item of queue) {
        try {
          if (item.type === 'CREATE_BATCH') {
            await this.client.createBatch(item.payload as CreateBatchRequest);
          }
          synced++;
        } catch (err) {
          remaining.push(item);
        }
      }

      await this.saveQueue(remaining);
      return { synced, remaining: remaining.length };
    } finally {
      this.isSyncing = false;
    }
  }

  private async loadQueue(): Promise<OfflineQueueItem[]> {
    const raw = await this.storage.getItem(QUEUE_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  private async saveQueue(queue: OfflineQueueItem[]): Promise<void> {
    await this.storage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }
}
