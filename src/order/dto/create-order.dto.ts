import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  table: number;

  @IsNumber()
  @IsOptional()
  status: number;

  @IsBoolean()
  @IsOptional()
  draft: boolean;

  @IsString()
  @IsOptional()
  name?: string;
}
