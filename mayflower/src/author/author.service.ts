import { Injectable } from '@nestjs/common';
import authors from 'src/data/authors';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';

@Injectable()
export class AuthorService {
  async findById(id) {
    const result = authors.filter((item) => item.id === id);

    return result.length ? result[0] : null;
  }

  async findAll() {
    return authors;
  }
}
