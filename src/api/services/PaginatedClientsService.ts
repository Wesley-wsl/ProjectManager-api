import { Client } from "../entities/Client";
import { IPaginatedRequest, IPaginatedResponse } from "../interfaces/paginated";

export class PaginatedClientsService {
    async execute({
        page,
    }: IPaginatedRequest): Promise<IPaginatedResponse<Client>> {
        const [clients, total] = await Client.findAndCount({
            skip: page * 10,
            take: 10,
        });

        const totalPages = Math.ceil(total / 10);

        if (page > totalPages - 1) throw new Error("Page don't exists.");

        const response: IPaginatedResponse<Client> = {
            data: clients,
            totalElements: total,
            page,
            elements: clients.length,
            elementsPerPage: 10,
            totalPages,
            firstPage: page === 0,
            lastPage: page === totalPages - 1,
        };

        return response;
    }
}
