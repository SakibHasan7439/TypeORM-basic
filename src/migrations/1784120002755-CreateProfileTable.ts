import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProfileTable1784120002755 implements MigrationInterface {
    name = 'CreateProfileTable1784120002755'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "profileId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_9466682df91534dd95e4dbaa616" UNIQUE ("profileId")`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "gender" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "photo" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9466682df91534dd95e4dbaa616" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9466682df91534dd95e4dbaa616"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "photo" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "gender" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_9466682df91534dd95e4dbaa616"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profileId"`);
    }

}
