import { Like } from "typeorm";

import { Client } from "../entities/Client";

export class ListClientsService {
    async execute({ name }: { name: string }): Promise<Client[]> {
        const clients = await Client.find({
            where: {
                name: Like(`%${name}%`),
            },
        });

        return clients;
    }
}
