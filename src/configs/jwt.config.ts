import { JwtModuleAsyncOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: async (config: ConfigService) => ({
    secret: config.get('JWT_SECRET'),
    signOptions: { expiresIn: '30d' },
  }),
  inject: [ConfigService],
};
