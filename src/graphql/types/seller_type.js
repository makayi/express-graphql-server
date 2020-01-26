import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLScalarType
} from "graphql";
import product_type from "./product_type";


const sellerType = new GraphQLObjectType({
  name: "seller",
  fields: {
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
    },
    seller_id:{
      type: GraphQLString
    }
  }
});

module.exports=sellerType;