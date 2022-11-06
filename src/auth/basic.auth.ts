import { UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';

export function basicAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const configService = new ConfigService();
  const auth = req.get('X-Payment-Authorization');

  if (!auth) {
    throw new UnauthorizedException('Missing Token');
  }

  if (auth !== configService.get<string>('APP_BASIC_TOKEN')) {
    throw new UnauthorizedException('Token mismatch');
  }

  next();
}
