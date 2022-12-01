### 🧸 nestjs graphql 

> validate graphql </br>
> local mysql </br>
> Implementing Pet / Owner relationship

Best way to create GraphQL API ?? | NestJS GraphQL Tutorial
- https://www.youtube.com/watch?v=geYvdbpo3cA&t=84s

</br>

### 🧸 npm install
```bash
pnpm add @nestjs/graphql graphql-tools graphql apollo-server-express

nest g module pets
nest g service pets
nest g resolver pets

# Driver 
pnpm add @nestjs/apollo

# In case the version doesn't match
pnpm add express@4.17.1
pnpm add webpack@5.0.0
```

Validate

```bash
pnpm add @nestjs/typeorm typeorm sqlite3

pnpm add class-validator class-transformer
```

Generate

```bash
nest g resource owners
    > Graphql (code fist)
```

</br>

### 🧸 Solve problem



Type 'string' has no properties in common with type 'FindOneOptions<User>'
- https://stackoverflow.com/questions/71635179/type-string-has-no-properties-in-common-with-type-findoneoptionsuser

```ts
# from
return this.petsRepository.findOneByOrFail(id)
# to
return this.petsRepository.findOneByOrFail({id})
```