import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Author } from 'src/author/entities/author.entity';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type BlogDocument = Blog & mongoose.Document;

@Schema()
@ObjectType()
export class Blog {
  @Field(() => ID)
  _id:number;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop({ required: true })
  @Field()
  isbn:string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Author.name })
  @Field(() => Author)
  author: Author | number;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);

BlogSchema.index({ author: 1 });