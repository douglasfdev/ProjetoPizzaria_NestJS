import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ChamadaModule } from './chamada/chamada.module';
import { getEnvPath } from './common/helpers/env.helper';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('VDT_DB_HOST'),
        port: config.get('VDT_DB_PORT'),
        database: config.get('VDT_DB_DATABASE'),
        username: config.get('VDT_DB_USER'),
        password: config.get('VDT_DB_PASSWORD'),
        migrations: ['dist/migrations/*.{ts,js}'],
        entities: [User],
        logger: 'file',
        synchronize: true, // never use TRUE in production!
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    ChamadaModule,
    ConfigModule.forRoot({ envFilePath, isGlobal: true, cache: true }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
