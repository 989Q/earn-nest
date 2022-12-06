import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorsResolver } from './author.resolver';
import { BlogService } from 'src/blog/blog.service';

@Module({
  providers: [AuthorsResolver, AuthorService, BlogService]
})
export class AuthorsModule {}
