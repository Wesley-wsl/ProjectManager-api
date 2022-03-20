import { validate } from "class-validator";
import { Request, Response } from "express";

import { User } from "../entities/User";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const userValidate = User.create({ email, password });
        const errors = await validate(userValidate);

        if (errors.length !== 0) response.status(400).json(errors);

        const service = new CreateUserService();

        const user = await service.execute({
            name,
            email,
            password,
        });

        return response.status(201).json({
            success: true,
            data: user,
        });
    }
}
