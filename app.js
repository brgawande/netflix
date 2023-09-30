import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],

  })
);

import userRoutes from "./routes/userRoutes.js";
app.use("/api/user", userRoutes);

export default app;
