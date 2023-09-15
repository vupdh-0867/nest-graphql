import { Field, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { InvoiceModel } from "./invoice.model";

@ObjectType()
@Entity()
export class CustomerModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({length: 500, nullable: false})
  name: string;

  @Field()
  @Column({length: 500, nullable: false})
  email: string;

  @Field()
  @Column('varchar', { length: 15 })
  phone: string;

  @Field()
  @Column('text')
  address: string;

  @Field(type => [InvoiceModel], { nullable: true })
  @OneToMany(type => InvoiceModel, invoice => invoice.customer)
  invoices: InvoiceModel[]

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
