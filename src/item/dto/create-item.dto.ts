import { IsNumber, IsUUID } from 'class-validator';
import { Item } from '../entities/item.entity';

export class CreateItemDto extends Item {
  @IsNumber()
  amount: number;

  @IsUUID()
  orderId: string;

  @IsNumber()
  productId: number;
}
