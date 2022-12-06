import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Blog } from 'src/blog/entities/blog.entity';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type AuthorDocument = Author & mongoose.Document

@Schema()
@ObjectType()
export class Author {
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' } })
  @Field(() => [Blog])
  blogs: Blog[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
