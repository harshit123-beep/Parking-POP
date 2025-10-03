import { z } from 'zod';

export const GeoLocationSchema = z.object({
  lat: z.number(),
  lng: z.number()
});
export type GeoLocation = z.infer<typeof GeoLocationSchema>;

export const UserRoleSchema = z.enum(['farmer', 'admin']);
export type UserRole = z.infer<typeof UserRoleSchema>;

export const FarmerSchema = z.object({
  id: z.string(),
  phone: z.string().optional(),
  email: z.string().optional(),
  name: z.string().optional(),
  role: UserRoleSchema
});
export type Farmer = z.infer<typeof FarmerSchema>;

export const BatchSchema = z.object({
  id: z.string(),
  farmerId: z.string(),
  name: z.string(),
  weightKg: z.number(),
  harvestDate: z.string(),
  location: GeoLocationSchema,
  blockchainHash: z.string(),
  blockchainTxId: z.string(),
  qrCodeDataUrl: z.string()
});
export type Batch = z.infer<typeof BatchSchema>;
