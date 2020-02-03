import { GraphQLList, GraphQLString} from "graphql";
import { getProducts, getSellerProducts} from "../../repositories/ProductRepository";
import ProductType from "../types/ProductType";

const products = {
  type: new GraphQLList(ProductType),
  args: {},
  resolve: async source => {
    return await getProducts();
  }
};

const seller_products = {
    type: new GraphQLList(ProductType),
    args: {id: {
        type:GraphQLString
    }},
    resolve: async (source,{id}) => {
      return await getSellerProducts(id);
    }
  };

module.exports = {
  products: products,
  seller_products:seller_products
};
