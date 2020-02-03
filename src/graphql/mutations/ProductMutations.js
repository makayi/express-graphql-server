import { GraphQLNonNull, GraphQLString } from "graphql";
import ProductType from '../types/ProductType';
import  ProductInputType from  '../inputTypes/ProductInputTypes';
import  {addProduct}  from  '../../repositories/ProductRepository';

const addProductMutation ={
    type:ProductType,
    args: {
        input:{
            type: new GraphQLNonNull (ProductInputType)
        }
    },
    resolve: async (source,{input})=>{
        return await addProduct(input)
    }
}

module.exports={
    addProduct:addProductMutation
}