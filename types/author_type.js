import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

const authorType =  new GraphQLObjectType({
  name: 'Author',
  fields: {
    name: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    }
  }
})

module.exports=authorType;