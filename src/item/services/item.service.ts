import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateItemDto } from '../dto/create-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../entities/item.entity';
import { Repository } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { ItemEnumType, OrderEnumType } from 'src/enum';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepo: Repository<Item>,
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const order = await this.orderRepo.findOneBy({ id: createItemDto.order });
    const products = await this.productRepo.findOneBy({
      id: createItemDto.products,
    });

    if (!order) {
      throw new BadRequestException('Order not found');
    }

    if (!products) {
      throw new BadRequestException('Product not found');
    }

    const createdItem = this.itemRepo.create({
      ...createItemDto,
      order,
      products,
    });

    await this.orderRepo.update(order.id, {
      draft: false,
      status: OrderEnumType.OPENED,
    });

    const savedItem = await this.itemRepo.save(createdItem);

    return {
      id: savedItem.id,
      ...savedItem,
      created_at: undefined,
      updated_at: undefined,
    };
  }

  async removeItemsOrder(uuid: string) {
    return this.itemRepo.update(uuid, {
      status: ItemEnumType.REMOVED,
    });
  }

  async finishItemOrder(id: string, createItemDto: CreateItemDto) {
    const order = await this.orderRepo.findOneBy({ id: createItemDto.order });
    const products = await this.productRepo.findOneBy({
      id: createItemDto.products,
    });
    return this.itemRepo.update(id, {
      status: createItemDto.status,
      order,
      products,
    });
  }

  async itemOrderSandProducts(uuid: string) {
    return this.itemRepo.findBy({ id: uuid });
  }
}
