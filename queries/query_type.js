import {GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql'
import postType from  '../types/post_type';
import userType from  '../types/user_type';
const posts = [
    {
      title: 'First post',
      description: 'Content of the first post',
      author: 'Flavio'
    },
    {
      title: 'Second post',
      description: 'Content of the second post',
      author: 'Roger'
    }
  ]
  

const queryType =  new GraphQLObjectType({
    name: 'Query',
    fields: {
      post: {
        type: postType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (source, {id}) => {
          return posts[id]
        }
      },
      posts: {
        type: new GraphQLList(postType),
        resolve: () => {
          return posts
        }
      },
      user: {
        type: userType,
          args:{
            id:{ type: GraphQLInt}
          },
          resolve:(source,{id})=>{
            return {email:"test@gmail.com","firstname":"mbuyu",lastname:"makayi",password:"950390"}
          }
      }
    }
  });

  module.exports=queryType;