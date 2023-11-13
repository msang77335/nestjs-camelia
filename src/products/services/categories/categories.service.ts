import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Category } from 'src/schemas/category.schema';
import { ProductsService } from '../products/products.service';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private cateModel: Model<Category>,
    private readonly productService: () => ProductsService,
  ) {}

  async findOne(slug: string): Promise<Category> {
    return this.cateModel.findOne({ slug: slug });
  }

  async findAll(): Promise<Category[]> {
    const [categories, products] = await Promise.all([
      this.cateModel.find().exec(),
      this.productService().findAll(),
    ]);
    for (const category of categories) {
      category.products = products.filter(
        (x) => x.categorySlug === category.slug,
      );
    }
    return categories;
  }
}
