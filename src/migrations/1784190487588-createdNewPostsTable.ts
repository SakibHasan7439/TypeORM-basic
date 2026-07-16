import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedNewPostsTable1784190487588 implements MigrationInterface {
    name = 'CreatedNewPostsTable1784190487588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."posts_status_enum" AS ENUM('pending', 'requested', 'published')`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "content" character varying NOT NULL, "status" "public"."posts_status_enum" NOT NULL DEFAULT 'pending', CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TYPE "public"."posts_status_enum"`);
    }

}
