import mongoose from "mongoose"

const mongoURI = process.env.mongoURI

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
        });
        console.log("Mongoose connected to DB");

    } catch (error) {
        console.error("Mongoose connection error:", error);
        throw error; 
    }
};
