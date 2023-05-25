import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB connected ${conn.connection.name}`);
    } catch (error) {
        return console.log(error);
        process.exit(1);
    }
};
