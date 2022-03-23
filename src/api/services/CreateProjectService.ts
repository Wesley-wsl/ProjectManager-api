import { ICreateProjectDTO } from "../dtos/CreateProjectDto";
import { Client } from "../entities/Client";
import { Project } from "../entities/Project";
import { User } from "../entities/User";
import { IProjectStatus } from "../enums/ProjectStatus";

export class CreateProjectService {
    async execute({
        name,
        logo,
        description,
        clientId,
        userId,
    }: ICreateProjectDTO): Promise<Project> {
        const verifyClient = await Client.find({
            id: clientId,
        });
        const verifyUser = await User.find({
            id: userId,
        });

        if (!verifyClient) throw new Error("Client don't exists.");
        if (!verifyUser) throw new Error("User don't exists.");

        const project = Project.create({
            name,
            client_id: clientId,
            logo,
            description,
            status: IProjectStatus.NEW,
            user_id: userId,
        });

        await Project.save(project);

        return project;
    }
}
