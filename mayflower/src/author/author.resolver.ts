import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from './entities/author.entity';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { BlogService } from 'src/blog/blog.service';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorService: AuthorService,
    private blogService: BlogService
  ) {}

  @Query(() => [Author])
  async authors() {
    return this.authorService.findAll();
  }

  @ResolveField()
  async blogs(@Parent() parent: Author) {
    return this.blogService.findByAuthorId(parent.id);
  }
}
  