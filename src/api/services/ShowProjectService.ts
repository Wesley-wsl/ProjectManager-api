import { Project } from "../entities/Project";

interface IShowProjectRequest {
    id: string;
}

export class ShowProjectService {
    async execute({ id }: IShowProjectRequest): Promise<Project> {
        const project = await Project.findOne(
            { id },
            { relations: ["client"] },
        );

        if (!project) throw new Error("Project not found.");

        return project;
    }
}
