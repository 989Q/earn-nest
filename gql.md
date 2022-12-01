### createPet
```
mutation {
  createPet(createPetInput: {
    name:"Eleven",
    ownerId: 1
  }) {
    id,
    name
  }
}
```

```
{
  "data": {
    "createPet": {
      "id": 2,
      "name": "Eleven"
    }
  }
}
```

### createOwner
```
mutation {
  createOwner(createOwnerInput: {
    name: "marius"
  }) {
    id,
    name
  }
}
```

```
{
  "data": {
    "createOwner": {
      "id": 1,
      "name": "marius"
    }
  }
}
```

### get all pets
```
{
  pets {
    id,
    name,
    owner {
      name
    }
  }
}
```

```
{
  "data": {
    "pets": [
      {
        "id": 1,
        "name": "Eleven",
        "owner": {
          "name": "marius"
        }
      },
      {
        "id": 2,
        "name": "Eleven",
        "owner": {
          "name": "marius"
        }
      }
    ]
  }
}
```

### get by petID
```
{
  getPet(id: 1){
    name
  }
}
```

```
{
  "data": {
    "getPet": {
      "name": "Eleven"
    }
  }
}
```