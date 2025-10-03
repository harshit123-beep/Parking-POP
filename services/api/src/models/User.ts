import mongoose, { Schema, InferSchemaType, model } from 'mongoose';

const UserSchema = new Schema({
  phone: { type: String, index: true },
  email: { type: String, index: true },
  role: { type: String, enum: ['farmer', 'admin'], required: true, default: 'farmer' },
  name: { type: String }
}, { timestamps: true });

export type User = InferSchemaType<typeof UserSchema> & { _id: mongoose.Types.ObjectId };

export const UserModel = model('User', UserSchema);
