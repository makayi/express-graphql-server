import { GraphQLSchema } from 'graphql';
import queryType  from '../types/query_type';
const schema = new GraphQLSchema({
    query: queryType
  })

  module.exports=schema;