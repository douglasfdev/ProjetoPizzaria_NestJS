import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Get,
  Res,
  Param,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { resolve } from 'path';
import { randomBytes } from 'crypto';
import { CategoriesService } from 'src/categories/services/categories.service';
import { Product } from '../entities/product.entity';

@Controller({
  path: 'products',
  version: '1',
})
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly categoryService: CategoriesService,
  ) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('banner', {
      storage: diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp'),
        filename: (request, file, callback) => {
          const hashFile = randomBytes(16).toString('hex');
          const filename = `${hashFile}-${file.originalname}`;

          return callback(null, filename);
        },
      }),
    }),
  )
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file,
  ) {
    return this.productsService.create({
      ...createProductDto,
      banner: file.path,
    });
  }

  @Get('image/:imgPath')
  async seeUploadFiles(@Param('imgPath') image, @Res() res) {
    return res.sendFile(image, { root: __dirname + '/../../tmp' });
  }

  @Get(':id/categories')
  async productsByCategory(
    @Param('id') categoryId: string,
  ): Promise<Array<Product>> {
    return this.productsService.productsByCategory(categoryId);
  }
}
