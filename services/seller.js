import Seller from "../db/models/seller";

export async function getProducts() {
  try {
    const results = await Seller.find({}).exec();
    return results;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function createSeller(selleriNPUT) {
  try {
    const seller= new Seller(selleriNPUT);
    const result= await seller.save()
 
    console.log(result)
    return result;
  } catch (error) {
    console.log(error)
    throw error;
  }
}
