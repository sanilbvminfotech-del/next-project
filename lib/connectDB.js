import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://sanilbvminfotech_db_user:I75TOUjJLk6TgCJL@cluster0.c54cugl.mongodb.net/nextjsCrud";

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null,
    };
}

export async function connectDB() {
    if (cached.conn) return cached.conn;

    console.log('connectedddddddddddddddddddddddddd');

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI);
    }

    cached.conn = await cached.promise;

    return cached.conn;
}