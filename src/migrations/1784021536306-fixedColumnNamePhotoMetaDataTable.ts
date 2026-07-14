import { MigrationInterface, QueryRunner } from "typeorm";

export class FixedColumnNamePhotoMetaDataTable1784021536306 implements MigrationInterface {
    name = 'FixedColumnNamePhotoMetaDataTable1784021536306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo_meta_data" RENAME COLUMN "weight" TO "width"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo_meta_data" RENAME COLUMN "width" TO "weight"`);
    }

}
