### book

```
{
  books{
    id
    title
    isbn
    author {
      id
      name
    }
  }
}
```

### authors

```
{
  authors{
    id
		name
    books {
      id
      title
    }
  }
}
```

### createBook

```
mutation createBook($input: CreateBookInput!){
  createBook(input: $input){
    id
    isbn
    title
  }
}

{
  "input": {
    "title": "asd",
    "id": "1",
    "isbn": "1",
    "author": 1
  }
}
```

### FindBookInput

```
query book($input: FindBookInput!) {
  book(input: $input) {
    id
    title
    isbn
    author {
      id
      name
    }
  }
}

{
  "input": {
    "id": 1
  }
}
```
