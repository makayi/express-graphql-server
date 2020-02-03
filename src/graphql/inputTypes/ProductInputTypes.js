import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat
} from "graphql";

const productInputType = new GraphQLInputObjectType({
  name: "ProductInput",
  fields: {
    name: {
      type: GraphQLString,
      description: "This is name of the product."
    },
    price: {
      type: GraphQLFloat,
      description: "This is price of the product."
    },
    description: {
      type: GraphQLString,
      description: "This is description of the product"
    },
    seller_id: {
      type: GraphQLString,
      description: "This is the id of the seller. "
    }
  }
});

module.exports = productInputType;
