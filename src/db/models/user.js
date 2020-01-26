import mongoose,{Schema} from  'mongoose';

const user =new Schema({
    id:{
     type:Number
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('User',user);
