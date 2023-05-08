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

  /**
   * Create a Product
   * @param {Object} createProductDTO - Product who owner wants to register.
   * @param {string=} createProductDTO.name - The name of the Product
   * @param {string} createProductDTO.price
   * @param {string} createProductDTO.description
   * @param {string} createProductDTO.banner
   * @param {string} createProductDTO.category_id
   * @returns The Product created
   */
  async create(createProductDto: CreateProductDto) {
    const category = await this.preloadCategoryById(createProductDto.category);

    const createdProduct = this.product.create({
      ...createProductDto,
      category: {
        id: category.id,
        name: category.name,
      },
    });

    await this.product.save(createdProduct);
    return {
      ...createdProduct,
      created_at: undefined,
      updated_at: undefined,
    };
  }

  /**
   * Find a Category
   * @param {string} uuid - Category responsible of the product.
   * @returns The Category responsible of the Product
   */
  async preloadCategoryById(uuid: string) {
    const categoryId = await this.category.findOneBy({ id: uuid });

    if (!categoryId) {
      throw new BadRequestException(`category id: ${uuid} doesn't exists`);
    }

    return { ...categoryId };
  }

  /**
   * Find a Products Category
   * @param {string} uuid - Category responsible of the product.
   * @returns The Category responsible of the Product
   */
  async productsByCategory(uuid: string) {
    return this.product.find({
      where: {
        category: { id: uuid },
      },
      relations: ['category'],
    });
  }
}
