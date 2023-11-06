import { Module } from '@nestjs/common';
import { ProductResolver } from './resolvers/product.resolvers';
import { MongooseModule } from '@nestjs/mongoose';
import { CateSchema, Category } from 'src/schemas/category.schema';
import { CategoriesService } from './services/categories/categories.service';
import { ProductsService } from './services/products/products.service';
import { Product, ProductSchema } from 'src/schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CateSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  providers: [ProductResolver, CategoriesService, ProductsService],
})
export class ProductsModule {}
