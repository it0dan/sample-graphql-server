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

###### 1 - Download
Download repository 

###### 2 - Set MongoDB variables
At **index.js** file, update information with your MongoDB's USER, PASSWORD, CLUSTER and DATABASE.
```
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

