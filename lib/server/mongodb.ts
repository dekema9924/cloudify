
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

export const connectDB = async () => {
  try {
    mongoose.connect(MONGODB_URI).then((mongoInstance) => {
      if (mongoInstance.connection.readyState === 1) {
        console.log(' MongoDB connected');
      }
    })
  } catch (err) {
    console.error("Error connecting to MongoDB:", err)
  }
}

