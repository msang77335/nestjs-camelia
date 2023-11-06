import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ColorDocument = HydratedDocument<Color>;

@Schema()
@ObjectType()
export class Color {
  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  slug: string;

  @Prop()
  @Field()
  value: string;

  @Prop()
  @Field(() => [String])
  images: [string];
}

export const ColorSchema = SchemaFactory.createForClass(Color);
