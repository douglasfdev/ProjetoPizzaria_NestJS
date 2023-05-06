import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepo.create({ ...createCategoryDto });

    await this.categoryRepo.save({ ...category });

    return {
      ...category,
      created_at: undefined,
      updated_at: undefined,
    };
  }

  async preloadProductByName(name: string): Promise<Product> {
    const product = await this.productRepo.findOneBy({ name });

    if (!product) {
      return this.productRepo.create({ name });
    }

    return {
      ...product,
      created_at: undefined,
      updated_at: undefined,
    };
  }

  /**
   * Find all Categories
   * @param {string} uuid - Category responsible of the product.
   * @returns The Category responsible of the Product
   */
  async allCategories(): Promise<Array<Category>> {
    return this.categoryRepo.find();
  }
}
