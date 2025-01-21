import { Request, Response } from "express";
import { generateMockTest } from "../services/mockTestService";
import { MockTest } from "../models/MockTest";
import { User } from "../models/User";

export const createMockTest = async (req: Request, res: Response) => {
    try {
      const { userId, limit } = req.body;
      const mockTest = await generateMockTest(userId, limit);
      res.status(200).json({ 
        success: true, 
        data: mockTest,
        message: "Mock test created successfully",
        mockTestId: mockTest._id, });
    } catch (error) {
      const err = error as Error; 
      res.status(400).json({ success: false, message: err.message });
    }
  };
  
  export const getMockTestQuestions = async (req: Request, res: Response) => {
    const { mockTestId } = req.params;
  
    try {
      // Find the mock test by ID
      const mockTest = await MockTest.findById(mockTestId).populate('questionIds');
      if (!mockTest) {
        return res.status(404).json({ success: false, message: "Mock test not found." });
      }
  
      // Populate questions for the mock test
      const questions = mockTest.questionIds;
      
      // Return questions to the user
      res.status(200).json({ success: true, data: questions });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ success: false, message: err.message });
    }
  };

  export const submitAnswers = async (req: Request, res: Response) => {
    const { mockTestId, answers } = req.body; // answers is an array of objects { questionId, answer }
    
    try {
      // Find the mock test by ID
      const mockTest = await MockTest.findById(mockTestId);
      
      if (!mockTest) {
        return res.status(404).json({ success: false, message: "Mock test not found." });
      }
  
      const user = await User.findById(mockTest.userId);
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found." });
      }
  
      user.attemptedQuestions.push(...mockTest.questionIds);
      await user.save();
  
      res.status(200).json({ success: true, message: "Answers submitted successfully." });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ success: false, message: err.message });
    }
  };