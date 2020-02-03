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
