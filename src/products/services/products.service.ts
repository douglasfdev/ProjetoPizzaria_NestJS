import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = { ...createProductDto };

    const createdProduct = this.repository.create(product);

    await this.repository.save(createdProduct);
    return {
      ...createdProduct,
    };
  }
}
