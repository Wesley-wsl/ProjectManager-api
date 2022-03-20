import { Request, Response } from "express";

import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const service = new AuthenticateUserService();

        const token = await service.execute({
            email,
            password,
        });

        return response.status(200).json({
            success: true,
            data: token,
        });
    }
}
