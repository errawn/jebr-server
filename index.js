import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
// Graphql
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './schema'
import resolvers from './resolvers'
// Db
import models from './db/models'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const app = express()
app.use(cors('*'))
app.use(morgan('dev'))
app.use(
	'/graphql', 
	bodyParser.json(), 
	graphqlExpress({ schema, context: { models } })
)
// Use graphiql
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
)

const PORT = 3000
app.listen(PORT, () => console.log('App running!'));