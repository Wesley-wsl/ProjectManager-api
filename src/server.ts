import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { resolve } from "path";
import swaggerUi from "swagger-ui-express";

import database from "./api/database";
import { errorHandler } from "./api/middlewares/errorHandler";
import { userRouter, clientRouter, projectRouter } from "./api/routes";
import swaggerJSON from "./config/swagger/index.json";

config();
database();

const app = express();
app.use(cors());
app.use("/files", express.static(resolve(__dirname, "..", "uploads")));

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSON));
app.use("/api/v1/user", userRouter);
app.use("/api/v1/client", clientRouter);
app.use("/api/v1/project", projectRouter);
app.use(errorHandler);

app.listen(process.env.PORT || 3333, () => console.log("Server is running"));
