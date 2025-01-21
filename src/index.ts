import dotenv from "dotenv";
import { connectDatabase } from "./utils/db";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});