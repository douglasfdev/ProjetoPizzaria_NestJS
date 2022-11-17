import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { RegExHelper } from 'src/common/helpers/regex.helpers';
import { MessagesHelper } from 'src/common/helpers/messages.helper';

export class CreateUserDto extends User {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  @Matches(RegExHelper.password, {
    message: MessagesHelper.PASSWORD_VALID,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
