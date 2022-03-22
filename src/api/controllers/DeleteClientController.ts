import { Request, Response } from "express";

import { DeleteClientService } from "../services/DeleteClientService";

export class DeleteClientController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const service = new DeleteClientService();

        await service.execute(id);

        return response.status(204).send();
    }
}
