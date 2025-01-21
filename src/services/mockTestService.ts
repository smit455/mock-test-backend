import { User } from "../models/User";
import { Question } from "../models/Question";
import { MockTest } from "../models/MockTest";
import mongoose from "mongoose";

export const generateMockTest = async (userId: string, limit: number) => {
  // Fetch user from database
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  // Ensure attemptedQuestions is an array of ObjectIds
  const attemptedQuestions = user.attemptedQuestions as mongoose.Types.ObjectId[];

  // Find available questions that have not been attempted yet
  const availableQuestions = await Question.find({ _id: { $nin: attemptedQuestions } }).limit(limit);

  // Check if enough new questions are available
  if (availableQuestions.length < limit) {
    throw new Error("Not enough new questions available");
  }

  // Extract ObjectIds of the available questions
  const questionIds = availableQuestions.map((q) => q._id as mongoose.Types.ObjectId);
  
  await user.save();

  // Create the mock test with the selected question IDs
  const mockTest = await MockTest.create({ userId, questionIds });

  return mockTest;
};
