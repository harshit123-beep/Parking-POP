import { z } from 'zod';
import { GeoLocationSchema, UserRoleSchema, BatchSchema } from './models.js';

export const RequestOtpRequest = z.object({ loginId: z.string().min(5) });
export const RequestOtpResponse = z.object({ ok: z.literal(true), loginId: z.string(), otp: z.string().optional(), dev: z.boolean().optional() });

export const VerifyOtpRequest = z.object({ loginId: z.string().min(5), otp: z.string().length(6) });
export const VerifyOtpResponse = z.object({ token: z.string(), user: z.object({ id: z.string(), role: UserRoleSchema, phone: z.string().optional(), email: z.string().optional() }) });

export const CreateBatchRequest = z.object({
  name: z.string().min(2),
  weightKg: z.number().positive(),
  harvestDate: z.string(),
  location: GeoLocationSchema
});

export const CreateBatchResponse = z.object({ batch: BatchSchema, consensus: z.boolean() });

export const ListBatchesResponse = z.object({ batches: z.array(BatchSchema) });

export const PublicScanResponse = z.object({
  authenticity: z.boolean(),
  verification: z.any(),
  batch: z.object({
    id: z.string(),
    name: z.string(),
    weightKg: z.number(),
    harvestDate: z.any(),
    location: GeoLocationSchema,
    qrCodeDataUrl: z.string()
  })
});

export type RequestOtpRequest = z.infer<typeof RequestOtpRequest>;
export type RequestOtpResponse = z.infer<typeof RequestOtpResponse>;
export type VerifyOtpRequest = z.infer<typeof VerifyOtpRequest>;
export type VerifyOtpResponse = z.infer<typeof VerifyOtpResponse>;
export type CreateBatchRequest = z.infer<typeof CreateBatchRequest>;
export type CreateBatchResponse = z.infer<typeof CreateBatchResponse>;
export type ListBatchesResponse = z.infer<typeof ListBatchesResponse>;
export type PublicScanResponse = z.infer<typeof PublicScanResponse>;
