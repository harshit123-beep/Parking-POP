import { z } from 'zod';
export declare const RequestOtpRequest: z.ZodObject<{
    loginId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    loginId: string;
}, {
    loginId: string;
}>;
export declare const RequestOtpResponse: z.ZodObject<{
    ok: z.ZodLiteral<true>;
    loginId: z.ZodString;
    otp: z.ZodOptional<z.ZodString>;
    dev: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    loginId: string;
    ok: true;
    otp?: string | undefined;
    dev?: boolean | undefined;
}, {
    loginId: string;
    ok: true;
    otp?: string | undefined;
    dev?: boolean | undefined;
}>;
export declare const VerifyOtpRequest: z.ZodObject<{
    loginId: z.ZodString;
    otp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    loginId: string;
    otp: string;
}, {
    loginId: string;
    otp: string;
}>;
export declare const VerifyOtpResponse: z.ZodObject<{
    token: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        role: z.ZodEnum<["farmer", "admin"]>;
        phone: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        role: "farmer" | "admin";
        phone?: string | undefined;
        email?: string | undefined;
    }, {
        id: string;
        role: "farmer" | "admin";
        phone?: string | undefined;
        email?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    token: string;
    user: {
        id: string;
        role: "farmer" | "admin";
        phone?: string | undefined;
        email?: string | undefined;
    };
}, {
    token: string;
    user: {
        id: string;
        role: "farmer" | "admin";
        phone?: string | undefined;
        email?: string | undefined;
    };
}>;
export declare const CreateBatchRequest: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    name: string;
    weightKg: number;
    harvestDate: string;
    location: {
        lat: number;
        lng: number;
    };
}, {
    name: string;
    weightKg: number;
    harvestDate: string;
    location: {
        lat: number;
        lng: number;
    };
}>;
export declare const CreateBatchResponse: z.ZodObject<{
    batch: z.ZodObject<{
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
    consensus: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    batch: {
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
    };
    consensus: boolean;
}, {
    batch: {
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
    };
    consensus: boolean;
}>;
export declare const ListBatchesResponse: z.ZodObject<{
    batches: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    batches: {
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
    }[];
}, {
    batches: {
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
    }[];
}>;
export declare const PublicScanResponse: z.ZodObject<{
    authenticity: z.ZodBoolean;
    verification: z.ZodAny;
    batch: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        weightKg: z.ZodNumber;
        harvestDate: z.ZodAny;
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
        qrCodeDataUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        weightKg: number;
        location: {
            lat: number;
            lng: number;
        };
        qrCodeDataUrl: string;
        harvestDate?: any;
    }, {
        id: string;
        name: string;
        weightKg: number;
        location: {
            lat: number;
            lng: number;
        };
        qrCodeDataUrl: string;
        harvestDate?: any;
    }>;
}, "strip", z.ZodTypeAny, {
    batch: {
        id: string;
        name: string;
        weightKg: number;
        location: {
            lat: number;
            lng: number;
        };
        qrCodeDataUrl: string;
        harvestDate?: any;
    };
    authenticity: boolean;
    verification?: any;
}, {
    batch: {
        id: string;
        name: string;
        weightKg: number;
        location: {
            lat: number;
            lng: number;
        };
        qrCodeDataUrl: string;
        harvestDate?: any;
    };
    authenticity: boolean;
    verification?: any;
}>;
export type RequestOtpRequest = z.infer<typeof RequestOtpRequest>;
export type RequestOtpResponse = z.infer<typeof RequestOtpResponse>;
export type VerifyOtpRequest = z.infer<typeof VerifyOtpRequest>;
export type VerifyOtpResponse = z.infer<typeof VerifyOtpResponse>;
export type CreateBatchRequest = z.infer<typeof CreateBatchRequest>;
export type CreateBatchResponse = z.infer<typeof CreateBatchResponse>;
export type ListBatchesResponse = z.infer<typeof ListBatchesResponse>;
export type PublicScanResponse = z.infer<typeof PublicScanResponse>;
