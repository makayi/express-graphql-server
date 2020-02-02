import { GraphQLSchema } from "graphql";
import queries from "../queries/Queries";
import mutations from  '../mutations/Mutations';

const schema = new GraphQLSchema({
  query: queries,
  mutation:mutations
});

module.exports = schema;
