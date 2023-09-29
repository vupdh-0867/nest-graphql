import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { CustomerModel } from '../customer/customer.model';

@ObjectType()
export class Item {
  @Field()
  description: string;
  @Field()
  rate: number;
  @Field()
  quantity: number;
}

@ObjectType()
@Entity('invoices')
export class InvoiceModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field((type) => CustomerModel)
  @ManyToOne((type) => CustomerModel, (customer) => customer.invoices)
  customer: CustomerModel;

  @Field()
  @Column('text')
  note: string;

  @Field((type) => [Item])
  @Column({
    type: 'jsonb',
    array: false,
    default: [],
    nullable: false,
  })
  items: Item[];

  @Column()
  @Field()
  total: string;
}
