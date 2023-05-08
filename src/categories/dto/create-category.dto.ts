import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  name: string;
}
