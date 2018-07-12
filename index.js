import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from "cors";

import typeDefs from './schema';
import resolvers from './resolvers';

import models from './db/models';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(cors());

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

app.use(
	'/graphql', 
	bodyParser.json(), 
	graphqlExpress({ schema, context: { models } })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('App running!'));