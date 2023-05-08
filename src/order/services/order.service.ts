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
    const order = this.orderRepo.create({ ...createOrderDto });

    const createdOrder = await this.orderRepo.save({ ...order });
    return {
      ...createdOrder,
      created_at: undefined,
      updated_at: undefined,
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
