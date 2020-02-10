import { GraphQLObjectType } from "graphql";
import { createSellerMutation,deleteSellerMutation,updateSellerMutation } from "./SellerMutations";
import {addProduct} from './ProductMutations'
const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createSeller: createSellerMutation,
    deleteSeller:deleteSellerMutation,
    addProduct:addProduct,
    updateSeller:updateSellerMutation
  }
});

module.exports = mutations;
