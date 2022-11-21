## bash

### env

```
nest new part-one
yarn add @nestjs/graphql graphql-tools graphql apollo-server-express

### newest
npm i @nestjs/apollo
```

### src

```
nest g module author
nest g resolver author
nest g service author
touch src/author/author.schema.ts

nest g module book
nest g resolver book
nest g service book
touch src/book/book.schema.ts
```

---

## fix

### problem

Error: Missing "driver" option. In the latest version of "@nestjs/graphql" package (v10) a new required configuration property called "driver" has been introduced. </br>
Check out the official documentation for more details on how to migrate (https://docs.nestjs.com/graphql/migration-guide). </br>
Example:

```
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
})
```

### solve

docs

- https://docs.nestjs.com/graphql/migration-guide

install

- https://www.npmjs.com/package/@nestjs/apollo
