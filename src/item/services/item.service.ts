import { Injectable } from '@nestjs/common';
import { CreateItemDto } from '../dto/create-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly repository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const item = { ...createItemDto };

    const createdItem = this.repository.create(item);

    await this.repository.save(createdItem);
    return {
      ...createdItem,
    };
  }
}
