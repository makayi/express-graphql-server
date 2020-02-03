import {GraphQLInt, GraphQLList} from "graphql";
import {getSellers} from '../../repositories/SellerRepository'
import sellerType from "../types/SellerType";

const  sellers={
    type:  new GraphQLList(sellerType),
    args: {limit: {type:GraphQLInt}},
    resolve:async(source,{limit})=>{
      return await getSellers();
    }
  }

const seller={
    type: sellerType,
    args: { id: { type: GraphQLInt } },
    resolve:async (source, { id }) => {
      return seller;
    }
  }

  module.exports={
      sellers:sellers,
      seller:seller
  }