import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { OrderEnumType } from 'src/enum/OrderEnum';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = { ...createOrderDto };

    const createdOrder = this.orderRepo.create(order);

    await this.orderRepo.save(createdOrder);
    return {
      ...createOrderDto,
    };
  }

  async updateOrder(id: string, createOrderDto: CreateOrderDto) {
    return this.orderRepo.update(id, createOrderDto);
  }

  async removeOrder(id: string) {
    return this.orderRepo.update(id, {
      status: OrderEnumType.CANCELED,
    });
  }
}
