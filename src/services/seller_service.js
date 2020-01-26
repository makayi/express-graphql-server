import Seller from "../db/models/seller";

export async function getSellers() {
  try {
    const results = await Seller.find({}).exec();
    return results;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function createSeller(sellerInput) {
  try {
    const seller = new Seller(sellerInput);
    const result = await seller.save();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
