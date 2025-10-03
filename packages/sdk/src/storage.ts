import { set as idbSet, get as idbGet } from 'idb-keyval';

type StorageBackend = {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
};

class MemoryStorage implements StorageBackend {
  private data = new Map<string, string>();
  async getItem(key: string) { return this.data.get(key) ?? null; }
  async setItem(key: string, value: string) { this.data.set(key, value); }
  async removeItem(key: string) { this.data.delete(key); }
}

// Best-effort browser IndexedDB via idb-keyval
class IdbStorage implements StorageBackend {
  async getItem(key: string) { return (await idbGet(key)) ?? null; }
  async setItem(key: string, value: string) { await idbSet(key, value); }
  async removeItem(key: string) { await idbSet(key, undefined as any); }
}

export function detectStorage(): StorageBackend {
  if (typeof window !== 'undefined' && 'indexedDB' in window) return new IdbStorage();
  return new MemoryStorage();
}

export const tokenKey = 'herbchain_token';
