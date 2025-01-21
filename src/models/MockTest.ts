import mongoose, { Schema, Document } from "mongoose";

export interface IMockTest extends Document {
  userId: mongoose.Types.ObjectId;
  questionIds: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const MockTestSchema = new Schema<IMockTest>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  questionIds: { type: [Schema.Types.ObjectId], ref: "Question", required: true },
  createdAt: { type: Date, default: Date.now },
});

export const MockTest = mongoose.model<IMockTest>("MockTest", MockTestSchema);
