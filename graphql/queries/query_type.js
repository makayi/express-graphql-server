import { GraphQLObjectType} from "graphql";
import {seller,sellers} from '../queries/seller_queries';

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    seller: seller,
    sellers:sellers
  }
});

module.exports = queryType;
