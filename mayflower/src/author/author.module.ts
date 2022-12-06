import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorsResolver } from './author.resolver';
import { BlogService } from 'src/blog/blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from 'src/blog/entities/blog.entity';
import { Author, AuthorSchema } from './entities/author.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Blog.name, schema: BlogSchema}, 
      { name: Author.name, schema: AuthorSchema}
    ]),
  ],
  providers: [AuthorsResolver, AuthorService, BlogService]
})
export class AuthorsModule {}
