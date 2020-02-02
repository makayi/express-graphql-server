import { GraphQLObjectType} from "graphql";
import {seller,sellers} from './SellerQueries';

const queries = new GraphQLObjectType({
  name: "Query",
  fields: {
    seller: seller,
    sellers:sellers
  }
});

module.exports = queries;
