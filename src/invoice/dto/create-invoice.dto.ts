import { InputType, Field } from '@nestjs/graphql';
import { ItemDTO } from './item.dto';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateInvoiceDto {
  @Field()
  @IsNotEmpty()
  note: string;

  @Field((type) => [ItemDTO])
  items: Array<{ description: string; rate: number; quantity: number }>;
}
