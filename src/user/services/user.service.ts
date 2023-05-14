import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { hashPassword } from '../../common/utils/crypto.util';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    hashPassword(createUserDto, createUserDto.password);
    // const { email } = await this.findByEmail(createUserDto.email);

    // if (email) {
    //   throw new BadRequestException('Users already exists!');
    // }

    const user = {
      ...createUserDto,
    };

    const createdUser = this.repository.create(user);
    await this.repository.save(createdUser);
    return {
      ...createdUser,
      password: undefined,
    };
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email });

    if (!user) throw new NotFoundException('Usuário nao encontrado');

    return {
      ...user,
    };
  }

  async findById(id: number): Promise<User> {
    return this.repository.findOneBy({ id });
  }
}
