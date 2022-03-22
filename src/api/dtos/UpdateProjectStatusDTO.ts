import { IProjectStatus } from "../enums/ProjectStatus";

export interface IUpdateProjectStatusDTO {
    id: string;
    status: IProjectStatus;
}
