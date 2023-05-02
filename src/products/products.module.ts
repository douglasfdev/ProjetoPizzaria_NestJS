import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { MulterModule } from '@nestjs/platform-express';
import { Category } from 'src/categories/entities/category.entity';

@Module({
  imports: [
    MulterModule.register({
      dest: '../../tmp/',
    }),
    TypeOrmModule.forFeature([Product, Category]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
