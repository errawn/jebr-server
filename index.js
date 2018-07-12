import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';

const app = express();

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

const PORT = process.env.PORT || 3000;
app.listen(PORT);