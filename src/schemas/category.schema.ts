import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Product } from './product.schema';

export type CateDocument = HydratedDocument<Category>;

@Schema({ collection: 'category' })
@ObjectType()
export class Category {
  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  slug: string;

  @Prop()
  @Field(() => [Product])
  products: Product[];
}

export const CateSchema = SchemaFactory.createForClass(Category);
