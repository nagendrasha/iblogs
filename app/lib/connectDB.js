// lib/connectDB.js
import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('✅ Already connected to MongoDB');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('✅ MongoDB connection established');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    throw error; // Don't exit process in Next.js, just throw the error
  }
};

// Export both default and named exports for flexibility
export default connectDB;
export { connectDB };

// Export connection string for direct use if needed
export const connectionStr = process.env.MONGO_URL;
