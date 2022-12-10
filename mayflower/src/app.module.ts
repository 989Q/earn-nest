import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blog/blog.module';
import { AuthorsModule } from './author/author.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:2717/nestjs-graphql'),
    MongooseModule.forRoot('mongodb+srv://mooncreater:1uX9WMLj1VhWqEV6@cluster0.wydy7.mongodb.net/nestjs-graphql?retryWrites=true&w=majority '),
    // MongooseModule.forRoot('mongodb://db/nestjs-graphql'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    BlogsModule,
    AuthorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
