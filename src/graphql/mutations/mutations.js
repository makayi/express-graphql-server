import { GraphQLObjectType } from "graphql";
import { createSellerMutation,deleteSellerMutation } from "../mutations/seller_mutations";

const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createSeller: createSellerMutation,
    deleteSeller:deleteSellerMutation
  }
});

module.exports = mutations;
