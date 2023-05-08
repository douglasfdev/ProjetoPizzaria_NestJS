import { IsNumber, IsUUID } from 'class-validator';

export class CreateItemDto {
  @IsNumber()
  amount: number;

  @IsUUID()
  order: string;

  @IsNumber()
  products: number;
}
