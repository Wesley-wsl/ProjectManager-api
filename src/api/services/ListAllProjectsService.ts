import { Project } from "../entities/Project";

export class ListAllProjectsService {
    async execute(): Promise<Project[]> {
        const projects = await Project.find({ relations: ["client", "user"] });

        return projects;
    }
}
