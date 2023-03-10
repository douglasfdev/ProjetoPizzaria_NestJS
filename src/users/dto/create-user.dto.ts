import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword(
    {
      minLength: 6,
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 1,
    },
    {
      message:
        'Senha tem que ter mais que 6 caracteres, pelo menos uma letra maiúscula, pelo menos um caractere especial e pelo menos um número',
    },
  )
  password: string;
}
