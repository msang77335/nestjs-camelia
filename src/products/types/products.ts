import { Category } from 'src/schemas/category.schema';
import { Product } from 'src/schemas/product.schema';

export interface FindByCategorySlugRes {
  category: Category;
  products: Product[];
}
