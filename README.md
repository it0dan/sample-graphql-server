<p align="center">
  <a href="https://graphql.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" width="200" alt="GraphQL Logo" /></a>
</p>

  <p align="center">A query language for your API.</p>
    <p align="center">

# What is graphQL?
GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

# This code
This code represents a sample of how graphQL engine works and how powerful might be.

For this example let's imagine a simple social media, where users can make posts and comments. Check the image bellow:

<p align="center">
  <a href="https://ibb.co/6rvJdGc" target="blank"><img src="https://i.ibb.co/Bc4K1vH/Untitled.jpg" width="600" alt="Use Case" /></a>
</p>

## What do you need to use it?

  - [VSCode](https://code.visualstudio.com/) - IDE
  - [MongoDB Cloud](https://cloud.mongodb.com/) - DB
  - [Postman](https://www.postman.com/) - API Testing (optional)

## How to run it?

###### 1 - Download it
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

###### 4 - Run it
```bash
$ yarn dev
```


If everything works as expected, now you can play with your graphQL server.

## Playing
In your Postman, send a request like this cURL below:
```
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
                },
                {
                    "name": "CommentInput",
                    "description": null
                },
                {
                    "name": "Query",
                    "description": null
                },
                {
                    "name": "Mutation",
                    "description": null
                },
                {
                    "name": "Boolean",
                    "description": "The `Boolean` scalar type represents `true` or `false`."
                },
                {
                    "name": "Post",
                    "description": null
                },
                {
                    "name": "PostInput",
                    "description": null
                },
                {
                    "name": "User",
                    "description": null
                },
                {
                    "name": "UserInput",
                    "description": null
                },
                {
                    "name": "Subscription",
                    "description": null
                },
                {
                    "name": "__Schema",
                    "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations."
                },
                {
                    "name": "__Type",
                    "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types."
                },
                {
                    "name": "__TypeKind",
                    "description": "An enum describing what kind of type a given `__Type` is."
                },
                {
                    "name": "__Field",
                    "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type."
                },
                {
                    "name": "__InputValue",
                    "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value."
                },
                {
                    "name": "__EnumValue",
                    "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string."
                },
                {
                    "name": "__Directive",
                    "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor."
                },
                {
                    "name": "__DirectiveLocation",
                    "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies."
                }
            ]
        }
    }
}
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

