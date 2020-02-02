import { GraphQLObjectType } from "graphql";
import { createSellerMutation,deleteSellerMutation } from "./SellerMutations";

const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createSeller: createSellerMutation,
    deleteSeller:deleteSellerMutation
  }
});

module.exports = mutations;
