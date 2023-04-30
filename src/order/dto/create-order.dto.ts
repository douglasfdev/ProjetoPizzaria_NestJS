import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  table: number;

  @IsBoolean()
  status: boolean;

  @IsBoolean()
  draft: boolean;

  @IsString()
  name: string;
}
