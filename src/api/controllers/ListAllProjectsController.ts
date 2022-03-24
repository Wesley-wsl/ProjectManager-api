import { Request, Response } from "express";

import { ListAllProjectsService } from "../services/ListAllProjectsService";

export class ListAllProjectsController {
    async handle(request: Request, response: Response) {
        const service = new ListAllProjectsService();
        const projects = await service.execute();

        return response.status(200).json({
            success: true,
            data: projects,
        });
    }
}
