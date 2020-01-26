import {GraphQLObjectType,GraphQLString,GraphQLInt, GraphQLScalarType} from  'graphql';

const userType=  new GraphQLObjectType({
    name:"User",
    fields:{
        email:{
            type:GraphQLString
        },
        password:{
            type: GraphQLString
        },
        firstname:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        }
    }
});

module.exports=userType;