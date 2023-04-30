import { IsArray, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @IsArray()
  products: Array<string>;
}
