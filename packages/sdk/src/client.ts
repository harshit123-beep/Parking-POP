import axios, { AxiosInstance } from 'axios';
import { z } from 'zod';
import {
  RequestOtpRequest,
  RequestOtpResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
  CreateBatchRequest,
  CreateBatchResponse,
  ListBatchesResponse,
  PublicScanResponse
} from '@herbchain/types';
import { detectStorage, tokenKey } from './storage.js';

export class HerbChainClient {
  private http: AxiosInstance;
  private storage = detectStorage();

  constructor(private baseUrl: string) {
    this.http = axios.create({ baseURL: baseUrl, timeout: 10000 });
    this.http.interceptors.request.use(async (config) => {
      const token = await this.storage.getItem(tokenKey);
      if (token) {
        config.headers = config.headers || {};
        (config.headers as any)['Authorization'] = `Bearer ${token}`;
      }
      return config;
    });
  }

  async requestOtp(loginId: string) {
    const body: RequestOtpRequest = { loginId } as any;
    const res = await this.http.post('/auth/request-otp', body);
    return z.object({}).passthrough().parse(res.data) as RequestOtpResponse;
  }

  async verifyOtp(loginId: string, otp: string) {
    const body: VerifyOtpRequest = { loginId, otp } as any;
    const res = await this.http.post('/auth/verify-otp', body);
    const parsed = z.object({}).passthrough().parse(res.data) as VerifyOtpResponse;
    await this.storage.setItem(tokenKey, parsed.token);
    return parsed;
  }

  async createBatch(input: CreateBatchRequest) {
    const res = await this.http.post('/batches', input);
    return z.object({}).passthrough().parse(res.data) as CreateBatchResponse;
  }

  async listBatches() {
    const res = await this.http.get('/batches');
    return z.object({}).passthrough().parse(res.data) as ListBatchesResponse;
  }

  async publicScan(batchId: string) {
    const res = await this.http.get(`/public/scan/${batchId}`);
    return z.object({}).passthrough().parse(res.data) as PublicScanResponse;
  }

  async logout() {
    await this.storage.removeItem(tokenKey);
  }
}
