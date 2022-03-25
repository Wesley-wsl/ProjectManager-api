import { IUpdateProjectDTO } from "../dtos/UpdateProjectDTO";
import { Client } from "../entities/Client";
import { Project } from "../entities/Project";

export class UpdateProjectService {
    async execute({
        id,
        name,
        clientId,
        description,
        logo,
    }: IUpdateProjectDTO): Promise<Project> {
        const project = await Project.findOne({ id });

        if (!project) throw new Error("Project don't exists.");

        const verifyClient = await Client.findOne({ id: clientId });

        if (!verifyClient) throw new Error("Client don't exists.");

        project.name = name;
        project.client_id = clientId;
        project.description = description;
        project.logo = logo;

        await Project.save(project);

        return project;
    }
}
