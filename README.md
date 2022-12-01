### 🧸 nestjs graphql 

validate graphql , local mysql , Implementing Pet / Owner relationship 

</br>

Best way to create GraphQL API ?? | NestJS GraphQL Tutorial
- youtube : https://www.youtube.com/watch?v=geYvdbpo3cA&t=84s

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

![Screen Shot 2565-12-01 at 15 28 02](https://user-images.githubusercontent.com/73060136/205045686-49faff70-7652-4377-b2ff-007bfa555e5d.png)

Type 'string' has no properties in common with type 'FindOneOptions<User>'
- https://stackoverflow.com/questions/71635179/type-string-has-no-properties-in-common-with-type-findoneoptionsuser

```ts
# from
return this.petsRepository.findOneByOrFail(id)
# to
return this.petsRepository.findOneByOrFail({id})
```

</br>

### 🧸 Docs
TypeORM Integration
> in this project use old version until the document could not be found
    
Nestjs Validation , ValidationPipe
- web : https://docs.nestjs.com/techniques/validation    
    
Nestjs Schema first
- web : https://docs.nestjs.com/graphql/quick-start#schema-first
