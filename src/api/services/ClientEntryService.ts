import { Client } from "../entities/Client";
import { Project } from "../entities/Project";

export class ClientEntryService {
    async execute(code: string) {
        const project = await Project.find({
            relations: ["client"],
            where: {
                client: {
                    code,
                },
            },
        });
        if (!project) throw new Error("Project don't exists.");

        const client = await Client.findOne({ code });
        if (!client) throw new Error("Client not found.");

        return project;
    }
}
