import { Request, Response } from "express";

import { EnableUserService } from "../services/EnableUserService";

export class EnableUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new EnableUserService();

        const user = await service.execute(id);

        return response.status(201).json({
            success: true,
            data: user,
        });
    }
}
