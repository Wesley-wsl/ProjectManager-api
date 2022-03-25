import { Request, Response } from "express";

import { UpdateProjectService } from "../services/UpdateProjectService";

export class UpdateProjectController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, clientId, description, logo } = request.body;

        const service = new UpdateProjectService();

        const project = await service.execute({
            id,
            name,
            clientId,
            description,
            logo,
        });

        return response.status(201).json({
            success: true,
            data: project,
        });
    }
}
