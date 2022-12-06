import { Injectable } from '@nestjs/common';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';

import { Blog } from './entities/blog.entity';
import blogs from '../data/blogs';

@Injectable()
export class BlogService {

  blogs: Partial<Blog>[];
  constructor(){
    this.blogs = blogs
  }

  createBlog(blog: CreateBlogInput) {
    this.blogs = [blog, ...this.blogs];
    return blog;
  }

  async findAll() {
    return this.blogs;
  }

  async findById(id: number) {
    const blogs = this.blogs.filter((blog) => blog.id === id);
    if(blogs.length){
      return blogs[0]
    }

    return null
  }

  async findByAuthorId(authorId) {
    return this.blogs.filter((blog) => blog.author === authorId);
  }



  // update(id: number, updateBlogInput: UpdateBlogInput) {
  //   return `This action updates a #${id} blog`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} blog`;
  // }

}
