import { Category } from 'src/schemas/category.schema';
import { Product } from 'src/schemas/product.schema';
import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FindByCategorySlugResDocument =
  HydratedDocument<FindByCategorySlugRes>;

@Schema()
@ObjectType()
export class FindByCategorySlugRes {
  @Prop()
  @Field(() => Category)
  category: Category;

  @Prop()
  @Field(() => [Product])
  products: Product[];
}

export const FindByCategorySlugResSchema = SchemaFactory.createForClass(
  FindByCategorySlugRes,
);
