import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL;


app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api", tasksRoutes);

app.get("*", (req, res) => {
  console.log(path.resolve("client", "dist", "index.html") );
  res.sendFile(path.resolve("client", "dist", "index.html"));
});

export default app;
