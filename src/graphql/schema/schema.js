import { GraphQLSchema } from "graphql";
import queries from "../queries/queries";
import mutations from  '../mutations/mutations';

const schema = new GraphQLSchema({
  query: queries,
  mutation:mutations
});

module.exports = schema;
