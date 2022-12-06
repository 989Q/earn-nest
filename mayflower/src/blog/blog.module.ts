import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogResolver } from './blog.resolver';
import { AuthorService } from 'src/author/author.service';

@Module({
  providers: [BlogResolver, BlogService, AuthorService]
})
export class BlogsModule {}
