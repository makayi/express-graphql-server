import { GraphQLObjectType, GraphQLInt, GraphQLList } from "graphql";
import userType from "../types/user_type";
import sellerType from "../types/seller_type";
import productType from "../types/product_type";

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
    user: {
      type: userType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (source, { id }) => {
        return {
          email: "test@gmail.com",
          firstname: "mbuyu",
          lastname: "makayi",
          password: "950390"
        };
      }
    },
    seller: {
      type: sellerType,
      args: { id: { type: GraphQLInt } },
      resolve: (source, { id }) => {
        return seller;
      }
    }
  }
});

module.exports = queryType;
