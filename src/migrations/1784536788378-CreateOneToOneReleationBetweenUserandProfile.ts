import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOneToOneReleationBetweenUserandProfile1784536788378 implements MigrationInterface {
    name = 'CreateOneToOneReleationBetweenUserandProfile1784536788378'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_61a193410d652adedb69f7ad680"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "UQ_61a193410d652adedb69f7ad680"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "profileId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" ADD "profileId" uuid`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "UQ_61a193410d652adedb69f7ad680" UNIQUE ("profileId")`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_61a193410d652adedb69f7ad680" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
