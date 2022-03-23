import { Request, Response } from "express";

import { DeleteProjectService } from "../services/DeleteProjectService";

export class DeleteProjectController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteProjectService();

        await service.execute(id);

        return response.status(204).send();
    }
}
