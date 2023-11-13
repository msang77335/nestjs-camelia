import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schemas/product.schema';
import { CategoriesService } from '../categories/categories.service';
import { FindByCategorySlugRes } from 'src/products/types/products';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    private readonly cateService: () => CategoriesService,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(slug: string): Promise<Product> {
    return this.productModel.findOne({ slug: slug });
  }

  async findByCategorySlug(
    categorySlug: string,
  ): Promise<FindByCategorySlugRes> {
    const [category, products] = await Promise.all([
      this.cateService().findOne(categorySlug),
      this.productModel.find({ categorySlug: categorySlug }).exec(),
    ]);
    return {
      category,
      products,
    };
  }
}
