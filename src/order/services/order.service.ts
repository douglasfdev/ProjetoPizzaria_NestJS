import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = { ...createOrderDto };

    const createdOrder = this.repository.create(order);

    await this.repository.save(createdOrder);
    return {
      ...createOrderDto,
    };
  }
}
