import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserColumnInProject1647469086228 implements MigrationInterface {
    name = "AddUserColumnInProject1647469086228";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "projects" DROP CONSTRAINT "ProjectsClient"
        `);
        await queryRunner.query(`
            ALTER TABLE "projects"
            ADD "user_id" uuid NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "projects"
            ADD CONSTRAINT "FK_ca29f959102228649e714827478" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "projects"
            ADD CONSTRAINT "FK_bd55b203eb9f92b0c8390380010" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "projects" DROP CONSTRAINT "FK_bd55b203eb9f92b0c8390380010"
        `);
        await queryRunner.query(`
            ALTER TABLE "projects" DROP CONSTRAINT "FK_ca29f959102228649e714827478"
        `);
        await queryRunner.query(`
            ALTER TABLE "projects" DROP COLUMN "user_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "projects"
            ADD CONSTRAINT "ProjectsClient" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE
            SET NULL ON UPDATE CASCADE
        `);
    }
}
