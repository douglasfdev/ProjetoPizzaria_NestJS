import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minSymbols: 1,
    minNumbers: 1,
  })
  password: string;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
