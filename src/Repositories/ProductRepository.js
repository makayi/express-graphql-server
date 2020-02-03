import Product from "../db/models/Product";

export async function addProduct(input) {
  try {
    const product = new Product(input);
    return await product.save();
  } catch (error) {
    throw error;
  }
}

export async function deleteProduct(_id) {
  try {
    return await Product.findOneAndDelete({ _id: _id }).exec();
  } catch (error) {
    throw error;
  }
}

export async function getProducts() {
  try {
    return await Product.find({}).exec();
  } catch (error) {
    throw error;
  }
}


export async function getSellerProducts(id) {
    try {
      return await Product.find({_id:id}).exec();
    } catch (error) {
      throw error;
    }
  }
  

export async function updateProduct(params) {
  try {
  } catch (error) {
    throw error;
  }
}
