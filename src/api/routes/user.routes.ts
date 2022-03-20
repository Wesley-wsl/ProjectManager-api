import { Router } from "express";

import {
    EnableUserController,
    CreateUserController,
    AuthenticateUserController,
} from "../controllers";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const routes = Router();

routes.post("/", new CreateUserController().handle);
routes.post("/login", new AuthenticateUserController().handle);
routes.patch("/:id", ensureAuthenticated, new EnableUserController().handle);

export { routes as userRouter };
