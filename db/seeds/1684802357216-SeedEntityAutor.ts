import { MigrationInterface, QueryRunner } from "typeorm"

export class SeedEntityAutor1684802357216 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO autores (nome) values ('William sheakspere')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM autores WHERE nome='William sheakspere'`);//FAZER A QUERY NA MAO
    }

}
