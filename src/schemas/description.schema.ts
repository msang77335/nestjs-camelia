import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DescriptionDocument = HydratedDocument<Description>;

@Schema()
@ObjectType()
export class Description {
  @Prop()
  @Field()
  desType: string;

  @Prop()
  @Field()
  value: string;
}

export const DescriptionSchema = SchemaFactory.createForClass(Description);
