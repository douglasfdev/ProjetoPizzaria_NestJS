import {
  IsArray,
  IsNotEmpty,
  IsObject,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @IsArray()
  @IsObject()
  products: Array<string>;
}
