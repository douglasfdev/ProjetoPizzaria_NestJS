import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateItemDto } from '../dto/create-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../entities/item.entity';
import { Repository } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';

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

    const createdItem = await this.itemRepo.save({
      amount: createItemDto.amount,
      order,
      products,
    });

    return {
      ...createdItem,
      created_at: undefined,
      updated_at: undefined,
    };
  }

  async itemOrderSandProducts(uuid: string) {
    return this.itemRepo.findBy({ id: uuid });
  }

  async preloadOrderById(uuid: string) {
    const orderId = this.order.findOneBy({ id: uuid });

    if (!orderId) {
      throw new BadRequestException(`Order service id: ${uuid} doesn't exists`);
    }

    return { ...orderId };
  }

  async preloadProductById(id: number) {
    const product = this.product.findOneBy({ id });

    if (!product) {
      throw new BadRequestException(`Product id: ${id} doesn't exists`);
    }

    return { ...product };
  }
}
