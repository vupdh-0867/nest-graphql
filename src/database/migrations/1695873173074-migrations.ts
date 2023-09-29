import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCustomersAndInvoices1695873173074 implements MigrationInterface {
  name = 'CreateCustomersAndInvoices1695873173074'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "invoices" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "note" text NOT NULL, "items" jsonb NOT NULL DEFAULT '[]', "total" character varying NOT NULL, "customerId" uuid, CONSTRAINT "PK_668cef7c22a427fd822cc1be3ce" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(500) NOT NULL, "email" character varying(500) NOT NULL, "phone" character varying(15) NOT NULL, "address" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "invoices" ADD CONSTRAINT "FK_1df049f8943c6be0c1115541efb" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "invoices" DROP CONSTRAINT "FK_1df049f8943c6be0c1115541efb"`);
    await queryRunner.query(`DROP TABLE "customers"`);
    await queryRunner.query(`DROP TABLE "invoices"`);
  }
}
