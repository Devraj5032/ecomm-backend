import mongoose from "mongoose";

export const connectDB = async () => {
    const db = await mongoose.connect("mongodb://localhost:27017", {
        dbName: "e-Comm"
    })
    console.log(`DB connected to ${db.connection.host}`);
}