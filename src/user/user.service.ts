import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   return `This action returns a new user primise`;
  // }

  findByEmail(email: string) {
    return `This action return user by email`;
  }
}
