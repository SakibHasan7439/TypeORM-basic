import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePhotoTable1784016932263 implements MigrationInterface {
    name = 'CreatePhotoTable1784016932263'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "fileName" character varying NOT NULL, "views" integer NOT NULL, "isPublished" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "photo"`);
    }

}
