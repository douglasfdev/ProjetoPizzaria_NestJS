import { ConfigService } from '@nestjs/config';

const config = new ConfigService();

export const jwtConstants = {
  secret: 'JWT_SECRET',
};
