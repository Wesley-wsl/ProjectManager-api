import "express-async-errors";
import "reflect-metadata";
import { config } from "dotenv";
import express from "express";

import "./api/database";
import { errorHandler } from "./api/middlewares/errorHandler";
import { userRouter, clientRouter } from "./api/routes";

config();

const app = express();

app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/client", clientRouter);
app.use(errorHandler);

app.listen(3333, () => console.log("Server is running"));
