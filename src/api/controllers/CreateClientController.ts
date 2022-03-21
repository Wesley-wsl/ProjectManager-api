import { validate } from "class-validator";
import { Request, Response } from "express";

import { ICreateClientDTO } from "../dtos/CreateClientDTO";
import { Client } from "../entities/Client";
import { CreateClientService } from "../services/CreateClientService";

export class CreateClientController {
    async handle(request: Request, response: Response) {
        const { name, email, telephone, cpf }: ICreateClientDTO = request.body;

        const clientValidate = Client.create({
            email,
            telephone,
            cpf,
        });
        const errors = await validate(clientValidate);

        if (errors.length !== 0) response.status(400).json(errors);

        const service = new CreateClientService();

        const client = await service.execute({
            name,
            email,
            telephone,
            cpf,
        });

        return response.status(201).json({
            success: true,
            data: client,
        });
    }
}
