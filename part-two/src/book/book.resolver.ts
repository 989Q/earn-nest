import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { Author } from 'src/author/author.schema';
import { AuthorService } from 'src/author/author.service';
import { Book, CreateBookInput, FindBookInput } from './book.schema';
import { BookService } from './book.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
  ) {}

  @Query(() => Book)
  async book(@Args('input') { id }: FindBookInput) {
    return this.bookService.findByID(id);
  }

  @Query(() => [Book]) // <-- what will the query retrun?
  async books /* <-- Query name */() {
    return this.bookService.findMany(); // Resolve the query
  }

  @Mutation(() => Book)
  async createBook(@Args('input') book: CreateBookInput) {
    return this.bookService.createBook(book);
  }

  @ResolveField(() => Author)
  async author(@Parent() book: Book) {
    return this.authorService.findById(book.author);
  }
}
