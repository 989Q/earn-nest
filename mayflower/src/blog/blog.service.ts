import { Injectable } from '@nestjs/common';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';

import blogs from '../data/blogs';
import { Blog, BlogDocument } from './entities/blog.entity';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {

  blogs: Partial<Blog>[];
  constructor(
    @InjectModel(Blog.name) private blogModel: Model<BlogDocument>,
  ){
    this.blogs = blogs
  }

  async createBlog(blog: CreateBlogInput) {
    return this.blogModel.create(blog);
  }

  async findAll() {
    return this.blogModel.find().lean();
  }

  async findById(id) {
    return this.blogModel.findById(id).lean();
  }

  async findByAuthorId(authorId) {
    return this.blogModel.find({ author: authorId });
  }

  update(id: number, updateBlogInput: UpdateBlogInput) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
