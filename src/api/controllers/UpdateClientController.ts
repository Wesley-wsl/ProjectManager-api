import { Request, Response } from "express";

import { UpdateClientService } from "../services/UpdateClientService";

export class UpdateClientController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, email, telephone, cpf } = request.body;

        const service = new UpdateClientService();

        const user = await service.execute({ id, name, email, telephone, cpf });

        return response.status(201).json({
            success: true,
            data: user,
        });
    }
}
