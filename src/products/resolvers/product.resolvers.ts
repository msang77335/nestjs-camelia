import { Args, Query, Resolver } from '@nestjs/graphql';
import { Product } from 'src/schemas/product.schema';
import { ProductsService } from '../services/products/products.service';
import { Category } from 'src/schemas/category.schema';
import { CategoriesService } from '../services/categories/categories.service';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly cateService: CategoriesService,
  ) {}

  @Query(() => Product)
  async product(@Args('slug', { type: () => String }) slug: string) {
    return this.productsService.findOne(slug);
  }

  @Query(() => [Product])
  async products(
    @Args('categorySlug', { type: () => String }) categorySlug: string,
  ) {
    return this.productsService.findByCategorySlug(categorySlug);
  }

  @Query(() => [Category])
  async categories() {
    return this.cateService.findAll();
  }
}
