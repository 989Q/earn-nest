import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateBlogInput {
  @Field()
  title: string;

  @Field()
  isbn: string;

  @Field()
  author: string;
}
