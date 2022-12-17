<p align="center">
  <a href="https://graphql.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" width="200" alt="GraphQL Logo" /></a>
</p>

  <p align="center">A query language for your API.</p>
    <p align="center">

# What is graphQL?
GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

## 🧱 This code
This code represents a sample of how graphQL engine works and how powerful might be.

For this example let's imagine a simple social media, where users can make posts and comments. Check the image bellow:

<p align="center">
  <a href="https://ibb.co/6rvJdGc" target="blank"><img src="https://i.ibb.co/Bc4K1vH/Untitled.jpg" width="600" alt="Use Case" /></a>
</p>

## 💻 What do you need to use it?

  - [VSCode](https://code.visualstudio.com/) - IDE
  - [MongoDB Cloud](https://cloud.mongodb.com/) - DB
  - [Postman](https://www.postman.com/) - API Testing (optional)

## 🚀 How to run

###### 1 - Download
Download repository 

###### 2 - Set MongoDB variables
At [index.js](https://github.com/it0dan/graphql/blob/main/src/index.js) file, update information with your MongoDB's USER, PASSWORD, CLUSTER and DATABASE.
```javascript
  mongoose.connect('mongodb+srv:/USER:PASSWORD@CLUSTER.mongodb.net/DATABASE');
  mongoose.set('debug', true);
```

###### 3 - Install dependencies
```bash
$ npm install
```

###### 4 - Run
```bash
$ yarn dev
```


If everything works as expected, now you can play with your graphQL server.

## 🎮 Playing
In your Postman, send a request like this cURL below:
```bash
curl --location --request POST 'http://localhost:6666/graphql' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"{\r\n  __schema {\r\n    types {\r\n      name\r\n      description\r\n    }\r\n  }\r\n}","variables":{}}'
```

Your 200 OK response should be something like this:
```graphql
{
    "data": {
        "__schema": {
            "types": [
                {
                    "name": "Comment",
                    "description": null
                },
                {
                    "name": "ID",
                    "description": "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"4\"`) or integer (such as `4`) input value will be accepted as an ID."
                },
                {
                    "name": "String",
                    "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."
                }
                .............
```

###### Mutation example
```graphql
mutation {
    createUser (data: {
        firstName: "Jane"
        lastName: "Doe"
        email: "janedoe@notexist.com"
        active: true
    }) {
        _id
        fullName
    }
}
```

###### Query example
```graphql
query {
    users {
        fullName
        active
    }
}
```

## 🐛 Problem?
If you find some trouble to have some fun with this code feel confortable to open a new `ISSUE`.

But if you find some trouble and know how to solve, please open a `PULL REQUEST`.
