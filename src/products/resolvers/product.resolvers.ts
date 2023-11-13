import { Args, Query, Resolver } from '@nestjs/graphql';
import { Product } from 'src/schemas/product.schema';
import { ProductsService } from '../services/products/products.service';
import { Category } from 'src/schemas/category.schema';
import { CategoriesService } from '../services/categories/categories.service';
import { FindByCategorySlugRes } from '../types/responsive.type';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly cateService: CategoriesService,
  ) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(() => Product)
  async product(@Args('slug', { type: () => String }) slug: string) {
    return this.productsService.findOne(slug);
  }

  @Query(() => FindByCategorySlugRes)
  async productsByCategory(
    @Args('categorySlug', { type: () => String }) categorySlug: string,
  ) {
    return this.productsService.findByCategorySlug(categorySlug);
  }

  @Query(() => [Category])
  async categories() {
    return this.cateService.findAll();
  }
}
