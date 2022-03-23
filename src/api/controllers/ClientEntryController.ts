import { Request, Response } from "express";

import { ClientEntryService } from "../services/ClientEntryService";

export class ClientEntryController {
    async handle(request: Request, response: Response) {
        const { code } = request.params;

        const service = new ClientEntryService();

        const data = await service.execute(code);

        return response.status(200).json({
            success: true,
            data,
        });
    }
}
