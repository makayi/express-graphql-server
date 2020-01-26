import { GraphQLObjectType, GraphQLInt, GraphQLList } from "graphql";
import userType from "../types/user_type";
import sellerType from "../types/seller_type";
import productType from "../types/product_type";
import {getProducts} from '../../services/seller'

const seller=
  {
    firstname: "mbuyu",
    lastname: "makayi",
    email: "mbmakayi",
    seller_name: "mister",
    products: [
      {
        name: "Mac",
        price: 4.5,
        description: "This is the best mac ever",
        seller_id: "1244"
      }
    ]
  }
;

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    seller: {
      type: sellerType,
      args: { id: { type: GraphQLInt } },
      resolve:async (source, { id }) => {
        return seller;
      }
    },
    sellers:{
      type:  new GraphQLList(sellerType),
      args: {limit: {type:GraphQLInt}},
      resolve:async(source,{limit})=>{
        return await getProducts();
      }
    }
  }
});

module.exports = queryType;
