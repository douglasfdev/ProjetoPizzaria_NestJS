import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { OrderEnumType } from 'src/enum/OrderEnum';
import { Item } from 'src/item/entities/item.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(Item)
    private readonly itemRepo: Repository<Item>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = this.orderRepo.create({ ...createOrderDto });

    const createdOrder = await this.orderRepo.save({
      ...order,
    });
    return {
      ...createdOrder,
      created_at: undefined,
      updated_at: undefined,
    };
  }

  async attendOrder(id: string, createOrderDto: CreateOrderDto) {
    await this.orderRepo.findOneBy({ id });

    return this.orderRepo.save({
      id,
      draft: false,
      status: OrderEnumType.OPENED,
      ...createOrderDto,
    });
  }

  async closeOrder(id: string) {
    return this.orderRepo.update(id, {
      draft: false,
      status: OrderEnumType.FULFILLED,
    });
  }

  async removeOrder(id: string) {
    return this.orderRepo.update(id, {
      draft: true,
      status: OrderEnumType.CANCELED,
    });
  }

  async listOrders() {
    return this.orderRepo.find({
      select: {
        id: true,
        table: true,
        name: true,
        status: true,
      },
      where: {
        draft: false,
        status: OrderEnumType.OPENED,
      },
      order: {
        created_at: 'DESC',
      },
    });
  }

  async listOrderByItems(id: string) {
    return this.itemRepo.find({
      select: {
        id: true,
        amount: true,
        status: true,
        order: {
          id: true,
          table: true,
          status: true,
          name: true,
        },
        products: {
          id: true,
          name: true,
          price: true,
          description: true,
          banner: true,
        },
      },
      where: {
        order: { id },
      },
      relations: ['order', 'products'],
    });
  }
}
