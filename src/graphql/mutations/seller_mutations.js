import sellerType from "../types/seller_type";
import sellerInputType from  '../input_types/seller_input_type';
import {createSeller} from  '../../services/seller_service';


const createSellerMutation={
    type: sellerType,
    args:{
      input:{
        type:sellerInputType
      }
    },
    resolve: async (source, args) => {
      console.log(args)
      return await createSeller(args.input);
    }
  }

  module.exports={
      createSellerMutation:createSellerMutation
  }