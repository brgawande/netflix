import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

import userRoutes from "./routes/userRoutes.js";
app.use("/api/user", userRoutes);

export default app;
