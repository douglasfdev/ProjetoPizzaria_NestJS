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
    private readonly order: Repository<Order>,
    @InjectRepository(Product)
    private readonly product: Repository<Product>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const orderId = await this.preloadOrderById(createItemDto.orderId);
    const productId = await this.preloadProductById(createItemDto.productId);

    const createdItem = this.itemRepo.create({
      ...createItemDto,
      order_id: {
        id: orderId.id,
        item: orderId.item,
      },
      product_id: {
        id: productId.id,
        items: productId.items,
      },
    });

    await this.itemRepo.save(createdItem);

    return {
      ...createdItem,
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
