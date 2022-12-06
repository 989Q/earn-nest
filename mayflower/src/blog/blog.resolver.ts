import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { Blog } from './entities/blog.entity';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { Author } from 'src/author/entities/author.entity';
import { AuthorService } from 'src/author/author.service';
import { FindBlogInput } from './dto/find-blog.input';

@Resolver(() => Blog)
export class BlogResolver {
  constructor(
    private blogService: BlogService,
    private authorService: AuthorService,
  ) {}

  @Mutation(() => Blog)
  async createBlog(@Args('input') blog: CreateBlogInput) {
    return this.blogService.createBlog(blog);
  }

  @Query(() => [Blog])
  async blogs () {
    return this.blogService.findAll();
  }

  @Query(() => Blog)
  async blog(@Args('input') { _id }: FindBlogInput) {
    return this.blogService.findById(_id)
  }

  @ResolveField(() => Author)
  async author(@Parent() blog: Blog) {
    return this.authorService.findById(blog.author);
  }

  // @Mutation(() => Blog)
  // updateBlog(@Args('updateBlogInput') updateBlogInput: UpdateBlogInput) {
  //   return this.blogService.update(updateBlogInput.id, updateBlogInput);
  // }

  // @Mutation(() => Blog)
  // removeBlog(@Args('id', { type: () => Int }) id: number) {
  //   return this.blogService.remove(id);
  // }
}
