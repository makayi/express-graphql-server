const { expect } = require("chai");

const server = require("../index");
const request = require("supertest");

describe("GraphQL", () => {
  it("Returns seller", done => {
    request(server)
      .get("/graphql/")
      .send({ query: "{sellers(limit:1) { lastname,email,seller_name}}" })
      .expect(200)
      .end((err, res) => {
        // res will contain array with one user
        if (err) return done(err);
        expect(Array.isArray(res.body.data.sellers));
        expect(res.body.data).to.have.property("sellers");
        done();
      });
  });
});
