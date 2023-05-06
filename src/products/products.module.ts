import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { MulterModule } from '@nestjs/platform-express';
import { Category } from 'src/categories/entities/category.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriesService } from 'src/categories/services/categories.service';

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        dest: config.get<string>('PATH'),
      }),
    }),
    TypeOrmModule.forFeature([Product, Category]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, CategoriesService],
  exports: [ProductsService],
})
export class ProductsModule {}
