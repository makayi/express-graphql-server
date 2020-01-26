import  express  from  'express';
import  graphqlHTTP from  'express-graphql';
import schema from  './schema/schema'
import db from  './db/connector';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');


module.exports=app;