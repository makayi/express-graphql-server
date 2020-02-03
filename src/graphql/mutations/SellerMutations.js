import { GraphQLNonNull, GraphQLString } from "graphql";
import sellerType from "../types/SellerType";
import sellerInputType from "../inputTypes/SellerInputTypes";
import { createSeller, deleteSeller } from "../../repositories/SellerRepository";

const createSellerMutation = {
  type: sellerType,
  args: {
    input: {
      type: new GraphQLNonNull(sellerInputType)
    }
  },
  resolve: async (source, seller) => {
    return await createSeller(seller.input);
  }
};

const deleteSellerMutation = {
  type: sellerType,
  args: {
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (source, _id ) => {
    return await deleteSeller(_id)
  }
};

module.exports = {
  createSellerMutation: createSellerMutation,
  deleteSellerMutation: deleteSellerMutation
};
