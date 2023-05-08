import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
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

  @Delete(':id')
  async deleteItem(@Param('id') itemId: string) {
    await this.itemService.removeItemsOrder(itemId);
    return { message: 'Item removido com sucesso' };
  }

  @Patch(':id')
  async updateItem(
    @Param('id') itemId: string,
    @Body() createItemDto: CreateItemDto,
  ) {
    return this.itemService.finishItemOrder(itemId, createItemDto);
  }

  @Get(':id')
  async itemOrdersAndProducts(
    @Param('id') itemId: string,
  ): Promise<Array<Item>> {
    return this.itemService.itemOrderSandProducts(itemId);
  }
}
