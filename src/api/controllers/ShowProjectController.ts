import { Request, Response } from "express";

import { ShowProjectService } from "../services/ShowProjectService";

export class ShowProjectController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new ShowProjectService();
        const projects = await service.execute({ id });

        return response.status(200).json({
            success: true,
            data: projects,
        });
    }
}
