import { Test, TestingModule } from '@nestjs/testing';
import { BlogsResolver } from './blog.resolver';
import { BlogsService } from './blog.service';

describe('BlogsResolver', () => {
  let resolver: BlogsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogsResolver, BlogsService],
    }).compile();

    resolver = module.get<BlogsResolver>(BlogsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
