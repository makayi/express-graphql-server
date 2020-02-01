import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLScalarType
} from "graphql";

const sellerInputType= new GraphQLInputObjectType({
  name:"sellerInput",
  fields:{
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
})

module.exports=sellerInputType; 