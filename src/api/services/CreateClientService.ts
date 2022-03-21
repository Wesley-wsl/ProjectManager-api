import { transporter } from "../../config/smtp";
import { ICreateClientDTO } from "../dtos/CreateClientDTO";
import { Client } from "../entities/Client";

export class CreateClientService {
    async execute({
        name,
        cpf,
        email,
        telephone,
    }: ICreateClientDTO): Promise<Client> {
        const verifyEmail = await Client.findOne({ email });
        const verifyCpf = await Client.findOne({ cpf });

        if (verifyEmail) throw new Error("Client already used.");
        if (verifyCpf) throw new Error("CPF already used.");

        const clientCreated = Client.create({
            name,
            cpf,
            email,
            telephone,
        });

        const clientSaved = await Client.save(clientCreated);

        await transporter.sendMail({
            from: '"Administrador - Project Manager" <testerapp112@gmail.com>',
            to: email,
            subject: "Code for see project in Project manager.",
            text: "Hello world?",
            html: `<b>code: ${clientSaved.code}</b>`,
        });

        return clientCreated;
    }
}
