import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Blog } from 'src/blog/entities/blog.entity';

@ObjectType()
export class Author {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Blog])
  blogs: Blog[];
}
