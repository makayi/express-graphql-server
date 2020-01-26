import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLScalarType
} from "graphql";
import sellerType from "../types/seller_type";
import sellerInputType from  '../input_types/seller_input_type';
import {createSeller} from  '../../services/seller';

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createSeller: {
      type: sellerType,
      args:sellerInputType,
      resolve: async (source, seller) => {
        return await createSeller(seller);
      }
    }
  }
});

module.exports = mutationType;
