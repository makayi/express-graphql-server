import { GraphQLNonNull, GraphQLString } from "graphql";
import sellerType from "../types/seller_type";
import sellerInputType from "../input_types/seller_input_type";
import { createSeller, deleteSeller } from "../../services/seller_service";

const createSellerMutation = {
  type: sellerType,
  args: {
    input: {
      type: new GraphQLNonNull(sellerInputType),
      description: "Hehe"
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
