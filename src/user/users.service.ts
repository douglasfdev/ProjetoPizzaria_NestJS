import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly repository: Repository<Users>,
  ) {}

  async findOneOrFail(email: string) {
    try {
      const user = await this.repository.findOneOrFail({ where: { email } });

      return {
        ...user,
        password: undefined,
        hashPassword: undefined,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateUserDto) {
    const user = this.repository.create(data);
    await this.repository.save(user);

    return {
      ...user,
      password: undefined,
    };
  }

  async update(email: string, data: UpdateUserDto) {
    const user = await this.repository.findOneOrFail({ where: { email } });
    this.repository.merge(user, data);
    await this.repository.save(user);

    return {
      ...user,
      password: undefined,
    };
  }

  async destroy(email: string) {
    const user = await this.repository.findOneOrFail({ where: { email } });

    if (!user) {
      throw new NotFoundException(`Usuário com email: ${email} nao encontrado`);
    }
    return this.repository.softDelete({ email });
  }
}
