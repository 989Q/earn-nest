### 🧸 Refferrent

NestJS GraphQL TypeGraphQL

- https://github.com/TomDoesTech/NestJS-GraphQL

### 🧸 Error

part-two

```diff
yarn run v1.22.19
$ nest start
[Nest] 34778   - 11/23/2022, 2:25:51 PM   [NestFactory] Starting Nest application...
[Nest] 34778   - 11/23/2022, 2:25:51 PM   [InstanceLoader] MongooseModule dependencies initialized +49ms
[Nest] 34778   - 11/23/2022, 2:25:51 PM   [InstanceLoader] AppModule dependencies initialized +1ms
[Nest] 34778   - 11/23/2022, 2:25:51 PM   [InstanceLoader] GraphQLSchemaBuilderModule dependencies initialized +1ms
[Nest] 34778   - 11/23/2022, 2:25:51 PM   [InstanceLoader] GraphQLModule dependencies initialized +0ms
- [Nest] 34778   - 11/23/2022, 2:26:21 PM   [MongooseModule] Unable to connect to the database. Retrying (1)... +30001ms
- [Nest] 34778   - 11/23/2022, 2:26:54 PM   [MongooseModule] Unable to connect to the database. Retrying (2)... +33007ms
```

### 🧸 Solve

> Pull docker mongo & connect

part-two

```diff
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [NestFactory] Starting Nest application...
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [InstanceLoader] MongooseModule dependencies initialized +147ms
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [InstanceLoader] AppModule dependencies initialized +1ms
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [InstanceLoader] GraphQLSchemaBuilderModule dependencies initialized +3ms
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [InstanceLoader] GraphQLModule dependencies initialized +3ms
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [InstanceLoader] MongooseCoreModule dependencies initialized +15ms
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [InstanceLoader] MongooseModule dependencies initialized +13ms
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [InstanceLoader] BookModule dependencies initialized +5ms
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [InstanceLoader] AuthorModule dependencies initialized +0ms
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [RoutesResolver] AppController {/}: +7ms
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [RouterExplorer] Mapped {/, GET} route +3ms
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [GraphQLModule] Mapped {/graphql, POST} route +165ms
[Nest] 76700  - 11/23/2022, 11:53:13 PM     LOG [NestApplication] Nest application successfully started +2ms
```
