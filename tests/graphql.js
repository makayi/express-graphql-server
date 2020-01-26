const {expect} = require('chai');

const server = require('../index');
const request = require('supertest');

describe('GraphQL', () => {
    it('Returns user with id = 10', (done) => {
        // request(server).get('/graphql/')
        // .send({ query: '{  posts { description} } '})
        // .expect(200)
        // .end((err,res) => {
        //     // res will contain array with one user
        //     if (err) return done(err);
        //     expect(Array.isArray(res.body.posts))
        //     expect(res.body.data).to.have.property('posts')
        //     expect(res.body.data.posts[0]).to.have.property('description')
        //     done();
        // })
    })

    
});