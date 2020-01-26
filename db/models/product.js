import mongoose,{Schema} from  'mongoose';

const product= new Schema({
    name:{
        type:String,
        required:true
    },
    price: {
        type:Schema.Types.Decimal128,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    seller_id:{
        type:String,
        required:true
    }, 

});

module.exports= mongoose.model("product",product);
