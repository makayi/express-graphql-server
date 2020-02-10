import Seller from "../database/models/Seller";

export async function getSellers() {
  try {
    return await Seller.find({}).exec();
  } catch (error) {
    throw error;
  }
}

export async function createSeller(input) {
  try {
    const seller = new Seller(input);
    return await seller.save();
  } catch (error) {
    throw error;
  }
}

export async function deleteSeller({ _id }) {
  try {
    return await Seller.findOneAndDelete({ _id: _id }).exec();
  } catch (error) {
    throw error;
  }
}

export  async function updateSeller({_id,updatedSeller}){
  console.log(_id)
  console.log(updatedSeller)
 try {
   const response= await Seller.updateOne({_id:_id},updatedSeller,{runValidators:true}).exec();
   if(response.n>0 && response.nModified>0){
     return updatedSeller;
   }
   console.log(response)
   return response;
 } catch (error) {
   throw error
 }
}