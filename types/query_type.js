import {GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql'
import postType from  './post_type';

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
      }
    }
  });

  module.exports=queryType;