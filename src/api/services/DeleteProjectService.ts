import { Project } from "../entities/Project";

export class DeleteProjectService {
    async execute(id: string) {
        const project = await Project.findOne({ id });

        if (!project) throw new Error("Project not found.");

        await Project.delete({ id });
    }
}
