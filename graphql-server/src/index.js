import { createServer } from "http";
import express from 'express';
import {ApolloServer} from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import mongoose from 'mongoose';

(async () => {
  mongoose.connect('mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/DATABASE');
  mongoose.set('debug', true);

  const PORT = 6666;
  const app = express();
  const httpServer = createServer(app);

  const schema = makeExecutableSchema({typeDefs,resolvers});

  const server = new ApolloServer({schema});
  await server.start();
  server.applyMiddleware({ app });

  httpServer.listen(PORT, () =>
    console.log(`👌👌🔥 Server running on http://localhost:${PORT}/graphql`)
  )
})().catch((err) => console.error(err));