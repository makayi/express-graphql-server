import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
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
    products: {type:new GraphQLList(product_type)}
  }
});

module.exports=sellerType;