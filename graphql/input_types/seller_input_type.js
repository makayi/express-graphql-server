import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLScalarType
  } from "graphql";

  const sellerInputType= {
    firstname: {
      type: GraphQLString
    },
    lastname: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    seller_name: {
      type: GraphQLString
    }
  }

  module.exports=sellerInputType;