import { Controller, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { CreateOrderDto } from '../dto/create-order.dto';

@Controller({
  path: 'order',
  version: '1',
})
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Patch(':id')
  updateOrder(@Param() id: string, @Body() createOrderDto: CreateOrderDto) {
    return this.orderService.updateOrder(id, createOrderDto);
  }

  @Delete(':id')
  async deleteOrder(@Param() id: string) {
    await this.orderService.removeOrder(id);
    return { message: 'Ordem de serviço fechada com sucesso' };
  }
}
