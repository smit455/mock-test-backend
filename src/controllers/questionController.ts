import { Request, Response } from "express";
import { Question } from "../models/Question";

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { text, options, correctOption } = req.body;

    if (!text || !options || !correctOption) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const question = await Question.create({ text, options, correctOption });
    res.status(201).json({ success: true, data: question });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};
