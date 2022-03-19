import { IsEmail, IsPhoneNumber, MaxLength, MinLength } from "class-validator";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("clients")
export class Client extends BaseEntity {
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
    @IsPhoneNumber()
    telephone: string;

    @Column({
        unique: true,
    })
    @MinLength(11)
    @MaxLength(11)
    cpf: string;

    @Column()
    @Generated("uuid")
    code: string;

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    updated_at: string;
}
