import sellerType from "../types/seller_type";
import sellerInputType from  '../input_types/seller_input_type';
import {createSeller} from  '../../services/seller_service';


const createSellerMutation={
    type: sellerType,
    args:sellerInputType,
    resolve: async (source, seller) => {
      return await createSeller(seller);
    }
  }

  module.exports={
      createSellerMutation:createSellerMutation
  }