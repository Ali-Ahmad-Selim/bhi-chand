import mongoose from 'mongoose';

interface Connection {
    isConnected?: number;
}

const connection: Connection = {};

export const Connect = async (): Promise<void> => {
    if (connection.isConnected) {
        console.log("Already connected to MongoDB");
        return;
    }

    if (!process.env.MONGO_URI) {
        throw new Error("Please define the MONGO_URI environment variable inside .env.local");
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connections[0].readyState;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error instanceof Error ? error.message : String(error));
        throw new Error("Error connecting to MongoDB.");
    }
};