import { IsEmail, MaxLength, MinLength } from "class-validator";
import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({
        unique: true,
    })
    @IsEmail()
    email: string;

    @Column()
    @MinLength(5)
    @MaxLength(15)
    password: string;

    @Column({
        default: true,
    })
    active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
