import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClient1647140083246 implements MigrationInterface {
    name = "CreateClient1647140083246";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "clients" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "telephone" character varying NOT NULL,
                "cpf" character varying NOT NULL,
                "code" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"),
                CONSTRAINT "UQ_4245ac34add1ceeb505efc98777" UNIQUE ("cpf"),
                CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "clients"
        `);
    }
}
