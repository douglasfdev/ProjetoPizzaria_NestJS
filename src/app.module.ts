import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helpers/env.helper';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { ItemModule } from './item/item.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'userroot',
      password: 'pizzaria',
      database: 'pizzaria',
      autoLoadEntities: true,
      migrations: [__dirname + '/migrations/*{.js,.ts}'],
      entities: [__dirname + '/**/*.entity.js'],
    }),
    ConfigModule.forRoot({ envFilePath, isGlobal: true, cache: true }),
    UserModule,
    AuthModule,
    CategoriesModule,
    ProductsModule,
    OrderModule,
    ItemModule,
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
