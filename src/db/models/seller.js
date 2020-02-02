import mongoose, { Schema } from "mongoose";
import product from "./Product";
import uuid from  'uuid';

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
  seller_id:{
    type:String,       
    default:uuid.v1()
  }
});

module.exports=mongoose.model('sellers',seller,'sellers')
