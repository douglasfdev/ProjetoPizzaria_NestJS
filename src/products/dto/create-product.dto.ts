import { IsString, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  price: string;

  @IsString()
  description: string;

  banner: string;

  @IsUUID()
  category: string;
}
