import { Controller, Post, Body } from '@nestjs/common';
import { ItemService } from '../services/item.service';
import { CreateItemDto } from '../dto/create-item.dto';

@Controller({
  path: 'item',
  version: '1',
})
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }
}
