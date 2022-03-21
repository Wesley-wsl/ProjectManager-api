import { Router } from "express";

import {
    CreateClientController,
    ListClientsController,
    PaginatedClientsController,
    UpdateClientController,
    DeleteClientController,
    ClientEntryController,
} from "../controllers";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const routes = Router();

routes.get("/:code/project", new ClientEntryController().handle);
routes.use(ensureAuthenticated);
routes.get("/", new ListClientsController().handle);
routes.get("/paginated", new PaginatedClientsController().handle);
routes.post("/", new CreateClientController().handle);
routes.put("/:id", new UpdateClientController().handle);
routes.delete("/:id", new DeleteClientController().handle);

export { routes as clientRouter };
