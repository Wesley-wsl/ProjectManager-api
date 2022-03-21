import { Request, Response } from "express";

import { ListClientsService } from "../services/ListClientsService";

export class ListClientsController {
    async handle(request: Request, response: Response) {
        const { name } = request.query;
        const service = new ListClientsService();

        const clients = await service.execute({
            name: name !== undefined ? String(name) : "",
        });

        return response.status(200).json({
            success: true,
            data: clients,
        });
    }
}
