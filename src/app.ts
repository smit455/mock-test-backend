import express from "express";
import bodyParser from "body-parser";
import mockTestRoutes from "./routes/mockTestRoutes";

const app = express();

app.use(bodyParser.json());
app.use("/api", mockTestRoutes);

export default app;
