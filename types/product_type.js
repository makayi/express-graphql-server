import {GraphQLObjectType,GraphQLString,GraphQLFloat, GraphQLScalarType} from  'graphql';


const productType=  new  GraphQLObjectType({
    name:"product",
    fields:{
       name:{
           type:GraphQLString
       } ,
       price:{
           type:GraphQLFloat
       },
       description:{
           type:GraphQLString
       },
       seller_id:{
           type:GraphQLString
       }
    }
})


module.exports=productType;