import { IsNumber } from 'class-validator';

export class CreateItemDto {
  @IsNumber()
  amout: number;
}
