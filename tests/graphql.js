const { expect } = require("chai");

const server = require("../index");
const request = require("supertest");

describe("GraphQL", () => {
  it("Returns seller", done => {
    request(server)
      .get("/graphql/")
      .send({ query: "{  seller { lastname,email,seller_name,products{name,price,description,seller_id }} } " })
      .expect(200)
      .end((err, res) => {
        // res will contain array with one user
        if (err) return done(err);
        expect(Array.isArray(res.body.seller));
        expect(res.body.data).to.have.property("seller");
        done();
      });
  });
});
