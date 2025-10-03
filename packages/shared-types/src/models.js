import { z } from 'zod';
export const GeoLocationSchema = z.object({
    lat: z.number(),
    lng: z.number()
});
export const UserRoleSchema = z.enum(['farmer', 'admin']);
export const FarmerSchema = z.object({
    id: z.string(),
    phone: z.string().optional(),
    email: z.string().optional(),
    name: z.string().optional(),
    role: UserRoleSchema
});
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
