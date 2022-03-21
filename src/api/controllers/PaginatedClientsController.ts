import { Request, Response } from "express";

import { PaginatedClientsService } from "../services/PaginatedClientsService";

export class PaginatedClientsController {
    async handle(request: Request, response: Response) {
        const { page } = request.query;

        const service = new PaginatedClientsService();

        const clients = await service.execute({
            page: page !== undefined ? Number(page) : 0,
        });

        return response.status(200).json({
            success: true,
            clients,
        });
    }
}
