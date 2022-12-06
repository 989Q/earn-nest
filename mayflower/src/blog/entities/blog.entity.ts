import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Author } from 'src/author/entities/author.entity';

@ObjectType()
export class Blog {
  @Field(() => ID)
  id:number;

  @Field()
  title: string;

  @Field()
  isbn:string;

  @Field(() => Author)
  author: Author | number;
}