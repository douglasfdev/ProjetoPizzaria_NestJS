import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedError } from './errors/unauthorized.error';
import { User } from '../user/entities/user.entity';
import { UserService } from 'src/user/services/user.service';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { comparePassword } from 'src/common/utils/crypto.util';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(user: User): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const isPasswordValid = comparePassword(user, password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }

  async getJwtToken(currentUser: CreateUserDto): Promise<string> {
    const payload = {
      ...currentUser,
    };

    return this.jwtService.signAsync(payload);
  }

  async getUserByToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);

      return decoded;
    } catch (e) {
      throw new BadRequestException(`Token inválido: ${token}. ${e.message}`);
    }
  }
}
