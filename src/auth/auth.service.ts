import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<User> {
    try {
      const user = await this.userService.findByEmail(email);

      if (user) {
        const isPasswordValid = compareSync(password, user.password);
        if (isPasswordValid) {
          return;
        }
      }
    } catch (e) {
      return null;
    }
  }
}
