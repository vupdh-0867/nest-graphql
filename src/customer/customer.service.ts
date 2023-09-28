import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerModel } from 'src/customer/customer.model';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerModel)
    private customerRepository: Repository<CustomerModel>,
  ) {}

  create(details: CreateCustomerDto): Promise<CustomerModel> {
    return this.customerRepository.save(details);
  }

  findAll(): Promise<CustomerModel[]> {
    return this.customerRepository.find();
  }

  findOne(id: string): Promise<CustomerModel> {
    return this.customerRepository.findOneBy({ id });
  }
}
