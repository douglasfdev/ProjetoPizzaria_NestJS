import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Patch,
  Get,
} from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { CreateOrderDto } from '../dto/create-order.dto';

@Controller({
  path: 'orders',
  version: '1',
})
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Patch('attend/:id')
  attendOrder(@Param('id') id: string, @Body() createOrderDto: CreateOrderDto) {
    return this.orderService.attendOrder(id, createOrderDto);
  }

  @Patch('close/:id')
  closeOrder(@Param('id') id: string) {
    return this.orderService.closeOrder(id);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    await this.orderService.removeOrder(id);
    return { message: 'Ordem de serviço fechada com sucesso' };
  }

  @Get('opened')
  async listOrdersPendingAndOpened() {
    return this.orderService.listOrdersOpened();
  }

  @Get(':id/item')
  async listOrderByItems(@Param('id') id: string) {
    return this.orderService.listOrderByItems(id);
  }

  @Get()
  async listOrders() {
    return this.orderService.listOrders();
  }
}
