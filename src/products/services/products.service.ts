import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly product: Repository<Product>,
    @InjectRepository(Category)
    private readonly category: Repository<Category>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const categoryId = await this.preloadCategoryById(
      createProductDto.category,
    );

    const createdProduct = this.product.create({
      ...createProductDto,
      category: categoryId,
    });

    await this.product.save(createdProduct);
    return {
      ...createdProduct,
    };
  }

  async preloadCategoryById(uuid: string) {
    const categoryId = await this.category.findOneBy({ id: uuid });

    if (!categoryId) {
      throw new BadRequestException(`categy id: ${uuid} doesn't exists`);
    }

    return { ...categoryId };
  }
}
