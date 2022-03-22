import { IUpdateClientDTO } from "../dtos/UpdateClientDTO";
import { Client } from "../entities/Client";

export class UpdateClientService {
    async execute({
        id,
        name,
        email,
        telephone,
        cpf,
    }: IUpdateClientDTO): Promise<Client> {
        const client = await Client.findOne({ id });

        if (!client) throw new Error("Client don't exists.");

        if (email !== client.email) {
            const verifyEmail = await Client.findOne({ email });
            if (verifyEmail) throw new Error("Email already used.");
        }

        if (cpf !== client.cpf) {
            const verifyCpf = await Client.findOne({ cpf });
            if (verifyCpf) throw new Error("CPF already used.");
        }

        if (name) client.name = name;
        if (email) client.email = email;
        if (telephone) client.telephone = telephone;
        if (cpf) client.cpf = cpf;

        await Client.save(client);

        return client;
    }
}
