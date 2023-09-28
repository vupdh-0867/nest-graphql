import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateInvoiceDto } from 'src/invoice/dto/create-invoice.dto';

@InputType()
export class CreateCustomerDto {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsNotEmpty()
  phone: string;

  @Field()
  @IsNotEmpty()
  address: string;

  @Field(() => [CreateInvoiceDto])
  @ValidateNested()
  @Type(() => CreateInvoiceDto)
  invoices: CreateInvoiceDto[];
}
