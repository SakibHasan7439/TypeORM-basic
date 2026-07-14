import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePhotoMetaDataTable1784019585116 implements MigrationInterface {
    name = 'CreatePhotoMetaDataTable1784019585116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photo_meta_data" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "height" integer NOT NULL, "weight" integer NOT NULL, "orientation" character varying NOT NULL, "compressed" character varying NOT NULL, "comment" character varying NOT NULL, "photoId" uuid, CONSTRAINT "REL_b502d7fde3a3b17fb62ead319e" UNIQUE ("photoId"), CONSTRAINT "PK_741426192462a12522d0ceb3c6a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photo_meta_data" ADD CONSTRAINT "FK_b502d7fde3a3b17fb62ead319ef" FOREIGN KEY ("photoId") REFERENCES "photo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo_meta_data" DROP CONSTRAINT "FK_b502d7fde3a3b17fb62ead319ef"`);
        await queryRunner.query(`DROP TABLE "photo_meta_data"`);
    }

}
