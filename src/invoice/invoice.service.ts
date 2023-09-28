import { CustomerService } from './../customer/customer.service';
import { InvoiceModel } from './invoice.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(InvoiceModel)
    private invoiceRepository: Repository<InvoiceModel>,
    private customerService: CustomerService,
  ) {}

  async create(invoice: CreateInvoiceDto): Promise<InvoiceModel> {
    // TODO
    return null;
  }

  findAll(): Promise<InvoiceModel[]> {
    // TODO
    return null
  }

  findByCustomer(id: string): Promise<InvoiceModel[]> {
    // TODO
    return null
  }

  findOne(id: string): Promise<InvoiceModel> {
    // TODO
    return null
  }
}
