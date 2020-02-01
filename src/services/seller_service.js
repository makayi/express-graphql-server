import Seller from "../db/models/seller";

export async function getSellers() {
  try {
    return await Seller.find({}).exec();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function createSeller(sellerInput) {
  try {
    const seller = new Seller(sellerInput);
    return await seller.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteSeller({ _id }) {
  try {
    return await Seller.findOneAndDelete({ _id: _id }).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
