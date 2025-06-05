import express from 'express';
import mongoose, { Schema,  Document } from 'mongoose';

export interface UserDetails extends Document {
  username: string;
  userid: string;
  age: number;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<UserDetails>({
  username: { type: String, required: true },
    userid: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

export default mongoose.model<UserDetails>('User', userSchema);
