import { GraphQLSchema } from "graphql";
import queryType from "../queries/query_type";
import mutationType from  '../mutations/mutation_type';

const schema = new GraphQLSchema({
  query: queryType,
  mutation:mutationType
});

module.exports = schema;
