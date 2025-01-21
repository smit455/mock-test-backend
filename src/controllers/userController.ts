import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcryptjs";

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  // Check if all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields (username, email, password) are required." });
  }

  try {
    // Check if email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email or Username already exists." });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create a new user with hashed password
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ success: true, message: "User registered successfully.", userId: user._id });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if username or email and password are provided
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required." });
  }

  // Find user by email
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found." });
  }

  // Compare the provided password with the stored hash using bcrypt
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(401).json({ success: false, message: "Invalid credentials." });
  }

  res.status(200).json({ success: true, message: "Login successful.", userId: user._id });
};
