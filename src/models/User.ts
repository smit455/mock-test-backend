import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  attemptedQuestions: mongoose.Types.ObjectId[];  // Array of ObjectId references to the Question model
  createdAt: Date;
}

// Create the schema for the User
const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hash the password in real applications
  attemptedQuestions: { type: [Schema.Types.ObjectId], ref: "Question", default: [] },  // Array of ObjectId references to Question
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model<IUser>("User", UserSchema);
