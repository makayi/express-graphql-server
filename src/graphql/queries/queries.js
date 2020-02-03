import { GraphQLObjectType} from "graphql";
import {seller,sellers} from './SellerQueries';
import {products,seller_products}  from  './ProductQueries';

const queries = new GraphQLObjectType({
  name: "Query",
  fields: {
    seller: seller,
    sellers:sellers,
    products:products,
    seller_products:seller_products
  }
});

module.exports = queries;
