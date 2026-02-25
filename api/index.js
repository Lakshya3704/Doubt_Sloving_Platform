import "dotenv/config";
import mongoose from "mongoose";
import { app } from "../BackeEnd/src/app.js";

// Cache the MongoDB connection across serverless invocations
let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/ProbZ`
    );
    isConnected = true;
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}

// Wrap the Express app for Vercel serverless
export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}
