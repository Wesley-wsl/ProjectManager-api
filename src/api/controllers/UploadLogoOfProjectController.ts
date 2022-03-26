import { Request, Response } from "express";

import { UploadLogoOfProjectService } from "../services/UploadLogoOfProjectService";

export class UploadLogoOfProjectController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const service = new UploadLogoOfProjectService();

        const project = await service.execute({
            id,
            logo: request.file?.filename || "",
        });

        return response.status(201).json({
            success: true,
            data: project,
        });
    }
}
