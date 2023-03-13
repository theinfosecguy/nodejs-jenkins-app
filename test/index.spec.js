process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index.js");
let should = chai.should();

chai.use(chaiHttp);

describe("test / endpoint", () => {
	it("should work as expected", (done) => {
		chai.request(server)
			.get("/")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("foo");
				res.body.foo.should.be.a("string");
				res.body.foo.should.equal("barbar");
				done();
			});
	});
});
