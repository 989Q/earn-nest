### createAuthor

```
mutation createAuthor($input: CreateAuthorInput!) {
  createAuthor(input: $input) {
    _id
    name
  }
}

{
  "input": {
    "name": "Rowling"
  }
}
```

RES

```
{
  "data": {
    "createAuthor": {
      "_id": "637e4b93d9d65ad2072b4e8b",
      "name": "Rowling"
    }
  }
}
```

### createBook

```
mutation createBook($input: CreateBookInput!){
  createBook(input: $input){
    _id
    isbn
    title
    author {
      _id
    }
  }
}

{
  "input": {
    "title": "Harry Potter",
    "isbn": "5678",
    "author": "637e4b93d9d65ad2072b4e8b"
  }
}
```

RES

```
{
  "data": {
    "createBook": {
      "_id": "637e4c83695c3df3d56dc14f",
      "isbn": "5678",
      "title": "Harry Potter",
      "author": {
        "_id": "637e4b93d9d65ad2072b4e8b"
      }
    }
  }
}
```

### author

```
{
  authors{
    _id
		name
    books {
      _id
      title
    }
  }
}

```

### book

```
query book($input: FindBookInput!) {
  book(input: $input) {
    _id
    title
    isbn
    author {
      _id
      name
    }
  }
}

{
  "input": {
    "_id": "637e4c83695c3df3d56dc14f"
  }
}
```

RES

```
{
  "data": {
    "book": {
      "_id": "637e4c83695c3df3d56dc14f",
      "title": "Harry Potter",
      "isbn": "5678",
      "author": {
        "_id": "637e4b93d9d65ad2072b4e8b",
        "name": "Rowling"
      }
    }
  }
}
```

### books

```
{
  books{
    _id
    title
    isbn
    author {
      _id
      name
    }
  }
}

```

RES

```
{
  "data": {
    "books": [
      {
        "_id": "637e4c83695c3df3d56dc14f",
        "title": "Harry Potter",
        "isbn": "5678",
        "author": {
          "_id": "637e4b93d9d65ad2072b4e8b",
          "name": "Rowling"
        }
      }
    ]
  }
}
```
