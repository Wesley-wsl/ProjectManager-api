import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { resolve } from "path";

import "./api/database";
import { errorHandler } from "./api/middlewares/errorHandler";
import { userRouter, clientRouter, projectRouter } from "./api/routes";

config();

const app = express();
app.use(cors());
app.use("/files", express.static(resolve(__dirname, "..", "uploads")));

app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/client", clientRouter);
app.use("/api/v1/project", projectRouter);
app.use(errorHandler);

app.listen(3333, () => console.log("Server is running"));
