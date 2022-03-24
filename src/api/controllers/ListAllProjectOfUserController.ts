import { Request, Response } from "express";

import { ListAllProjectOfUserService } from "../services/ListAllProjectOfUserService";

export class ListAllProjectOfUserController {
    async handle(request: Request, response: Response) {
        const { userId } = request.params;

        const service = new ListAllProjectOfUserService();
        const projects = await service.execute(userId);

        return response.status(200).json({
            success: true,
            data: projects,
        });
    }
}
