import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

import { IProjectStatus } from "../enums/ProjectStatus";
import { Client } from "./Client";
import { User } from "./User";

@Entity("projects")
export class Project extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({
        type: "uuid",
    })
    client_id: string;

    @ManyToOne(() => Client)
    @JoinColumn({ name: "client_id" })
    client: string;

    @Column({
        type: "uuid",
    })
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column({
        type: "varchar",
    })
    status: IProjectStatus;

    @Column({
        nullable: true,
    })
    logo: string;

    @Column({
        type: "text",
    })
    description: string;

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    updated_at: string;
}
