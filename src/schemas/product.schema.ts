import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Color } from './color.schema';
import { Description } from './description.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ collection: 'products' })
@ObjectType()
export class Product {
  @Prop()
  @Field()
  slug: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  price: number;

  @Prop()
  @Field()
  info: string;

  @Prop()
  @Field()
  video: string;

  @Prop()
  @Field(() => [String])
  infoList: [string];

  @Prop()
  @Field()
  categorySlug: string;

  @Prop()
  @Field(() => [Color])
  colors: [Color];

  @Prop()
  @Field(() => [Description])
  description: [Description];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
