import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(slug: string): Promise<Product> {
    return this.productModel.findOne({ slug: slug });
  }

  async findByCategorySlug(categorySlug: string): Promise<Product[]> {
    return this.productModel.find({ categorySlug: categorySlug }).exec();
  }
}
