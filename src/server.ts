import "express-async-errors";
import "reflect-metadata";
import { config } from "dotenv";
import express from "express";

import "./api/database";
import { errorHandler } from "./api/middlewares/errorHandler";

config();

const app = express();

app.use(express.json());
app.use(errorHandler);

app.listen(3333, () => console.log("Server is running"));
