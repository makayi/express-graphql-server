import mongoose, { Schema } from "mongoose";
import product from "../models/product";

const seller = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  seller_name: {
    type: String,
    required: true
  },
  products: [product]
});

module.exports=mongoose.model('seller',seller)
