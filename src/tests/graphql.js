const { expect } = require("chai");

const server = require("../index");
const request = require("supertest");

describe("GraphQL", () => {
  console.log({ query: "{sellers(limit:1) { lastname,email,seller_name}}" })
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


  // it("Creates Seller", done => {
  //   const data= {
  //       firstname: "m",
  //       lastname: "makayi",
  //       email: "mbm@gmail.com",
  //       seller_name: "ZXIT"
  //   }
  //   const mutation=`{createSeller(input:${data}){ firstname,seller_name,seller_id}}`;
  
  //  const mut={mutation}
  //  console.log(mut)
  //   request(server)
  //     .get("/graphql/")
  //     .send(mut)
  //     .expect(200)
  //     .end((err, res) => {
  //       // res will contain array with one user
  //       console.log(err)
  //       if (err) return done(err);
  //       expect(Array.isArray(res.body.data.sellers));
  //       expect(res.body.data).to.have.property("sellers");
  //       done();
  //     });
  // });
});
