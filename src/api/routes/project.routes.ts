import { Router } from "express";
import multer from "multer";

import multerConfig from "../../config/multer";
import {
    CreateProjectController,
    ListAllProjectsController,
    UpdateProjectController,
    ShowProjectController,
    UpdateProjectStatusController,
    UploadLogoOfProjectController,
    ListAllProjectOfUserController,
    DeleteProjectController,
} from "../controllers";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const routes = Router();

routes.use(ensureAuthenticated);

routes.get("/", new ListAllProjectsController().handle);
routes.get("/:id", new ShowProjectController().handle);
routes.get("/user/:userId", new ListAllProjectOfUserController().handle);
routes.post(
    "/",
    multer(multerConfig).single("logo"),
    new CreateProjectController().handle,
);
routes.put(
    "/:id/upload",
    multer(multerConfig).single("logo"),
    new UploadLogoOfProjectController().handle,
);
routes.put("/:id", new UpdateProjectController().handle);
routes.patch("/:id", new UpdateProjectStatusController().handle);
routes.delete("/:id", new DeleteProjectController().handle);

export { routes as projectRouter };
