import { MigrationInterface, QueryRunner } from "typeorm";

export class Creandotablas1717384016707 implements MigrationInterface {
    name = 'Creandotablas1717384016707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "contrasena" character varying NOT NULL, "nombre" character varying NOT NULL, CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carrito" ("id" SERIAL NOT NULL, "clienteId" integer, CONSTRAINT "REL_22bb2eb32ee7fe44e1be66d66f" UNIQUE ("clienteId"), CONSTRAINT "PK_a8af129f65d19017ca8afe737d3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "producto" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "descripcion" character varying NOT NULL, "precio" integer NOT NULL, "imageurl" character varying NOT NULL, "empresaId" integer, CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "empresa" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "contrasena" character varying NOT NULL, "ruc" character varying NOT NULL, CONSTRAINT "PK_bee78e8f1760ccf9cff402118a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carrito_productos_producto" ("carritoId" integer NOT NULL, "productoId" integer NOT NULL, CONSTRAINT "PK_9d3382d6814b0a48f825e9dacb3" PRIMARY KEY ("carritoId", "productoId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_61e3793ee6e4b851c38ea293db" ON "carrito_productos_producto" ("carritoId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7aad9fdcb1b27b19954e8e017a" ON "carrito_productos_producto" ("productoId") `);
        await queryRunner.query(`ALTER TABLE "carrito" ADD CONSTRAINT "FK_22bb2eb32ee7fe44e1be66d66fa" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "FK_9863eda4c34ed231086b88e82dc" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carrito_productos_producto" ADD CONSTRAINT "FK_61e3793ee6e4b851c38ea293dbb" FOREIGN KEY ("carritoId") REFERENCES "carrito"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "carrito_productos_producto" ADD CONSTRAINT "FK_7aad9fdcb1b27b19954e8e017a2" FOREIGN KEY ("productoId") REFERENCES "producto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carrito_productos_producto" DROP CONSTRAINT "FK_7aad9fdcb1b27b19954e8e017a2"`);
        await queryRunner.query(`ALTER TABLE "carrito_productos_producto" DROP CONSTRAINT "FK_61e3793ee6e4b851c38ea293dbb"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "FK_9863eda4c34ed231086b88e82dc"`);
        await queryRunner.query(`ALTER TABLE "carrito" DROP CONSTRAINT "FK_22bb2eb32ee7fe44e1be66d66fa"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7aad9fdcb1b27b19954e8e017a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_61e3793ee6e4b851c38ea293db"`);
        await queryRunner.query(`DROP TABLE "carrito_productos_producto"`);
        await queryRunner.query(`DROP TABLE "empresa"`);
        await queryRunner.query(`DROP TABLE "producto"`);
        await queryRunner.query(`DROP TABLE "carrito"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
    }

}
