import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/user.repository';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.create(createUserDto);
  }

  async findAll(): Promise<Array<UserEntity>> {
    return this.userRepository.findAll();
  }

  async findOne(id: number): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number): Promise<void> {
    return this.userRepository.remove(id);
  }
}
