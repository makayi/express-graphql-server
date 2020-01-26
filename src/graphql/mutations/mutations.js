import { GraphQLObjectType } from "graphql";
import { createSellerMutation } from "../mutations/seller_mutations";

const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createSeller: createSellerMutation
  }
});

module.exports = mutations;
