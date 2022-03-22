import { Client } from "../entities/Client";

export class DeleteClientService {
    async execute(id: string): Promise<void> {
        const client = await Client.findOne({ id });

        if (!client) throw new Error("Client not found.");

        await Client.delete({ id });
    }
}
