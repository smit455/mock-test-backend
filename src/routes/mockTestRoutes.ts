import { Router } from "express";
import { createMockTest, getMockTestQuestions, submitAnswers } from "../controllers/mockTestController";
import { createQuestion } from "../controllers/questionController";
import { loginUser,registerUser } from "../controllers/userController";

const router = Router();

router.post("/mock-test", async (req, res, next) => {
  try {
    await createMockTest(req, res); // Wait for the function to resolve
  } catch (err) {
    next(err); // Pass the error to Express error-handling middleware
  }
});

router.post("/questions", async (req, res, next) => {
  try {
    await createQuestion(req, res); 
  } catch (err) {
    next(err); 
  }
});

router.post("/register", async (req, res, next) => {
  try {
    await registerUser(req, res); 
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    await loginUser(req, res);
  } catch (err) {
    next(err);
  }
});

router.get("/:mockTestId/questions", async (req, res, next) => {
  try {
    await getMockTestQuestions(req, res); 
  } catch (err) {
    next(err); 
  }
});

router.post("/submit-answers",async (req, res, next) => {
  try {
    await submitAnswers(req, res); 
  } catch (err) {
    next(err);
  }
} );

export default router;
