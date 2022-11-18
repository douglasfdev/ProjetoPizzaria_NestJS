import { Users } from './../user/entities/users.entity';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user) {
    const payload = { sub: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<Users> {
    try {
      const user = await this.userService.findOneOrFail(email);
      const isPasswordValid = compareSync(password, user.password);
      if (!isPasswordValid) return null;

      return user;
    } catch (error) {
      return null;
    }
  }
}
