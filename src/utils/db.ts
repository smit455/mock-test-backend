import mongoose from "mongoose";

export const connectDatabase = async () => {
  const mongoURI = process.env.MONGODB_URI;
  
  if (!mongoURI) {
    console.error("MongoDB URI is not defined in environment variables.");
    process.exit(1); 
  }

  try {
    await mongoose.connect(mongoURI); // Now mongoURI is guaranteed to be a string
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};
