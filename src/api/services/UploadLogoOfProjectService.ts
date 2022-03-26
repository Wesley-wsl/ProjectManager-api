import { IUpdateLogoOfProjectDTO } from "../dtos/UpdateLogoOfProjectDTO";
import { Project } from "../entities/Project";

export class UploadLogoOfProjectService {
    async execute({ id, logo }: IUpdateLogoOfProjectDTO): Promise<Project> {
        const project = await Project.findOne({ id });

        if (!project) throw new Error("Project don't exists.");

        project.logo = logo;

        await Project.save(project);

        return project;
    }
}
