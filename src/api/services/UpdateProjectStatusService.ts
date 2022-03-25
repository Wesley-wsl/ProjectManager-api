import { IUpdateProjectStatusDTO } from "../dtos/UpdateProjectStatusDTO";
import { Project } from "../entities/Project";
import { IProjectStatus } from "../enums/ProjectStatus";

export class UpdateProjectStatusService {
    async execute({ id, status }: IUpdateProjectStatusDTO): Promise<Project> {
        const project = await Project.findOne({ id });

        if (!project) throw new Error("Project don't exists.");
        if (!status) throw new Error("Status is required.");

        if (IProjectStatus[`${status}`]) {
            project.status = status;
        }
        if (!IProjectStatus[`${status}`])
            throw new Error("This status don't exists.");

        await Project.save(project);

        return project;
    }
}
