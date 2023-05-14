import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { IsPublic } from './decorators/is-public.decorator';
import { Response } from 'express';
import { UserToken } from './models/UserToken';

@Controller({
  path: 'auth',
  version: '1',
})
@IsPublic()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Request() req: AuthRequest,
    @Res({ passthrough: true }) res: Response,
  ): Promise<UserToken> {
    const token = await this.authService.getJwtToken(req.user);
    const secret = {
      token,
      refreshToken: '',
    };

    res.cookie('auth-cookie', secret, { httpOnly: true });
    return this.authService.login(req.user);
  }
}
