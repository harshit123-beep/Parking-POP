import { z } from 'zod';
export declare const GeoLocationSchema: z.ZodObject<{
    lat: z.ZodNumber;
    lng: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    lat: number;
    lng: number;
}, {
    lat: number;
    lng: number;
}>;
export type GeoLocation = z.infer<typeof GeoLocationSchema>;
export declare const UserRoleSchema: z.ZodEnum<["farmer", "admin"]>;
export type UserRole = z.infer<typeof UserRoleSchema>;
export declare const FarmerSchema: z.ZodObject<{
    id: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    role: z.ZodEnum<["farmer", "admin"]>;
}, "strip", z.ZodTypeAny, {
    id: string;
    role: "farmer" | "admin";
    phone?: string | undefined;
    email?: string | undefined;
    name?: string | undefined;
}, {
    id: string;
    role: "farmer" | "admin";
    phone?: string | undefined;
    email?: string | undefined;
    name?: string | undefined;
}>;
export type Farmer = z.infer<typeof FarmerSchema>;
export declare const BatchSchema: z.ZodObject<{
    id: z.ZodString;
    farmerId: z.ZodString;
    name: z.ZodString;
    weightKg: z.ZodNumber;
    harvestDate: z.ZodString;
    location: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        lat: number;
        lng: number;
    }, {
        lat: number;
        lng: number;
    }>;
    blockchainHash: z.ZodString;
    blockchainTxId: z.ZodString;
    qrCodeDataUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    farmerId: string;
    weightKg: number;
    harvestDate: string;
    location: {
        lat: number;
        lng: number;
    };
    blockchainHash: string;
    blockchainTxId: string;
    qrCodeDataUrl: string;
}, {
    id: string;
    name: string;
    farmerId: string;
    weightKg: number;
    harvestDate: string;
    location: {
        lat: number;
        lng: number;
    };
    blockchainHash: string;
    blockchainTxId: string;
    qrCodeDataUrl: string;
}>;
export type Batch = z.infer<typeof BatchSchema>;
