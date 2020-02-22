import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./graphql/schema/Schema";
import database from "./database/Connector";
import config from "config";

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.listen(config.get("port"));
console.log(
  `Running a GraphQL API server at http://localhost:${config.get(
    "port"
  )}/graphql`
);

module.exports = app;
