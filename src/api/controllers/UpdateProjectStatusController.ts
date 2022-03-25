import { Request, Response } from "express";

import { UpdateProjectStatusService } from "../services/UpdateProjectStatusService";

export class UpdateProjectStatusController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { status } = request.body;

        const service = new UpdateProjectStatusService();

        const project = await service.execute({
            id,
            status,
        });

        return response.status(201).json({
            success: true,
            data: project,
        });
    }
}
