import mongoose, { Schema, InferSchemaType, model } from 'mongoose';

const GeoSchema = new Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true }
}, { _id: false });

const BatchSchema = new Schema({
  farmerId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  name: { type: String, required: true },
  weightKg: { type: Number, required: true },
  harvestDate: { type: Date, required: true },
  location: { type: GeoSchema, required: true },
  blockchainHash: { type: String, required: true },
  blockchainTxId: { type: String, required: true },
  qrCodeDataUrl: { type: String, required: true }
}, { timestamps: true });

export type Batch = InferSchemaType<typeof BatchSchema> & { _id: mongoose.Types.ObjectId };

export const BatchModel = model('Batch', BatchSchema);
