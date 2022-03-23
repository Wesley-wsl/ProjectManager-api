import { Request, Response } from "express";

import { CreateProjectService } from "../services/CreateProjectService";

export class CreateProjectController {
    async handle(request: Request, response: Response) {
        const { name, clientId, description, userId } = request.body;
        const service = new CreateProjectService();

        const project = await service.execute({
            name,
            clientId,
            description,
            logo: request.file?.filename,
            userId,
        });

        return response.status(201).json({
            success: true,
            data: project,
        });
    }
}
