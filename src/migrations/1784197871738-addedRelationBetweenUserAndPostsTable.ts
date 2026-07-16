import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedRelationBetweenUserAndPostsTable1784197871738 implements MigrationInterface {
    name = 'AddedRelationBetweenUserAndPostsTable1784197871738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "userId"`);
    }

}
