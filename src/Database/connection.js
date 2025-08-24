import mongoose from 'mongoose';

export default async function connectToDatabase() {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}