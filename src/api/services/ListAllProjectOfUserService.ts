import { Project } from "../entities/Project";

export class ListAllProjectOfUserService {
    async execute(userId: string): Promise<Project[]> {
        const projects = await Project.find({
            relations: ["client", "user"],
            where: {
                user_id: userId,
            },
        });

        return projects;
    }
}
