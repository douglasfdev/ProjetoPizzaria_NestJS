import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChamadaModule } from './chamada/chamada.module';
import { getEnvPath } from './common/helpers/env.helper';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ChamadaModule,
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}
