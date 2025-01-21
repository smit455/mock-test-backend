import mongoose, { Schema, Document } from "mongoose";

export interface IQuestion extends Document {
  text: string;
  options: string[];
  correctOption: string;
}

const QuestionSchema = new Schema<IQuestion>({
  text: { type: String, required: true },
  options: { type: [String], required: true },
  correctOption: { type: String, required: true },
});

export const Question = mongoose.model<IQuestion>("Question", QuestionSchema);
