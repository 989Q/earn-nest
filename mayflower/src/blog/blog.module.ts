import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogResolver } from './blog.resolver';
import { AuthorService } from 'src/author/author.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from './entities/blog.entity';
import { Author, AuthorSchema } from 'src/author/entities/author.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Blog.name, schema: BlogSchema}, 
      { name: Author.name, schema: AuthorSchema}
    ]),
  ],
  providers: [BlogResolver, BlogService, AuthorService]
})
export class BlogsModule {}
