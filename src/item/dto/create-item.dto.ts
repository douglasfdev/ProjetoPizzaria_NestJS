import { IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateItemDto {
  @IsNumber()
  @IsOptional()
  amount: number;

  @IsNumber()
  @IsOptional()
  status: number;

  @IsUUID()
  order: string;

  @IsUUID()
  products: string;
}
