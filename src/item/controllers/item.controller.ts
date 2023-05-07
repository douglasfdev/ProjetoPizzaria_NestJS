import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ItemService } from '../services/item.service';
import { CreateItemDto } from '../dto/create-item.dto';
import { Item } from '../entities/item.entity';

@Controller({
  path: 'item',
  version: '1',
})
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get(':id/items')
  async itemOrdersAndProducts(
    @Param('id') itemId: string,
  ): Promise<Array<Item>> {
    return this.itemService.itemOrderSandProducts(itemId);
  }
}
