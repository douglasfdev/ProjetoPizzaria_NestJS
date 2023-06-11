import { UserRole } from 'src/enum/UserRole';
import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail()
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  email: string;

  @IsString()
  @MinLength(4, { message: 'Senha requer ao menos quatro caracteres' })
  @MaxLength(20, { message: 'Tamanho máximo de senha são vinte caracteres' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Senha requer pelo menos um caractere especial, um número e uma letra maiúscula',
  })
  @IsNotEmpty({ message: 'Senha nao pode ser vazia' })
  password: string;

  @IsString({
    message:
      'Nome tem que haver mais que quatro caracteres e menos que cinquenta caracteres',
  })
  @MinLength(4)
  @MaxLength(50)
  @IsNotEmpty({ message: 'Nome nao pode ser vazio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Role nao pode ser vazio' })
  role: UserRole;
}
