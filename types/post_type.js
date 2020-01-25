import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import authorType  from './author_type';


const authors = {
    'Flavio': {
      name: 'Flavio',
      age: 36
    },
    'Roger': {
      name: 'Roger',
      age: 7
    }
  }
  

const postType =  new GraphQLObjectType({
    name: 'Post',
    fields: {
      title: {
        type: GraphQLString
      },
      description: {
        type: GraphQLString
      },
      author: {
        type: authorType,
        resolve: (source, params) => {
          return authors[source.author]
        }
      }
    }
  });


  module.exports=postType;