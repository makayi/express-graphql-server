import { GraphQLObjectType } from "graphql";
import { createSellerMutation,deleteSellerMutation } from "./SellerMutations";
import {addProduct} from './ProductMutations'
const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createSeller: createSellerMutation,
    deleteSeller:deleteSellerMutation,
    addProduct:addProduct
  }
});

module.exports = mutations;
