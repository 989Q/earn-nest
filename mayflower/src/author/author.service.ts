import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';

import { Author, AuthorDocument } from './entities/author.entity';
import authors from 'src/data/authors';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService {

  constructor(
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>
  ){}

  async createAuthor(input){
    return this.authorModel.create(input);
  }

  async findAll() {
    return this.authorModel.find().lean();
  }

  async findById(id) {
    return this.authorModel.findById(id).lean();
  }

}
