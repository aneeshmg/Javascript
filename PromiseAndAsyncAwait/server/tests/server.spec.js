const chai = require("chai")
const chaiHttp = require("chai-http")
const app = require("../server")
const assert = chai.assert
const expect = chai.expect

chai.use(chaiHttp)


describe("server-tests", () => {
    describe("Status check", () => {
        it("responds with service online message", (done) => {
            chai.request(app)
                .get("/_status")
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res.body).to.not.be.null
                    expect(res.text).to.equal("Service online.")
                    done()
                })
        })
    })
    describe("Server functionality", () => {
        let randNumber = null
        let oddNumber = null
        let evenNumber = null
        before(() => {
            randNumber = parseInt((Math.random() * 100))
            oddNumber = randNumber % 2 == 0 ? randNumber + 1 : randNumber
            evenNumber = oddNumber * 2
        })

        it("should respond with number", (done) => {
            chai.request(app)
                .get("/handshake")
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res).to.be.json
                    expect(res.body).to.be.an("object")
                    expect(res).to.have.header("Content-type", "application/json; charset=utf-8")
                    expect(res.body).to.have.property("number").that.is.a("number")
                })
            done()
        })
        it("number should be odd", (done) => {
            chai.request(app)
                .get("/handshake")
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res).to.be.json
                    expect(res.body).to.be.an("object")
                    expect(res).to.have.header("Content-type", "application/json; charset=utf-8")
                    expect(res.body).to.have.property("number")
                    expect(res.body.number).to.be.Odd()
                })
            done()
        })
        it("should accept only even numbers with one 2 as factor", (done) => {
            chai.request(app)
                .get(`/login/${evenNumber}`)
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res.body).to.be.an("object")
                    expect(res).to.have.header("Content-type", "application/json; charset=utf-8")
                    expect(res.body).to.not.be.null
                    expect(res.body).to.have.property("msg").that.is.a("string")
                    expect(res.body.msg).to.be.Success()
                })
            done()
        })
        it("should throw unauthorised when even number with more than one 2 as factor is passed", (done) => {
            chai.request(app)
                .get(`/login/${evenNumber * 2}`)
                .end((err, res) => {
                    expect(res).to.have.status(401)
                    expect(res.body).to.be.null
                })
            done()
        })
        it("should throw unauthorised when odd number is passed", (done) => {
            chai.request(app)
                .get(`/login/${oddNumber}`)
                .end((err, res) => {
                    expect(res).to.have.status(401)
                    expect(res.body).to.be.null
                })
            done()
        })
    })
})

chai.Assertion.addMethod("Odd", function () {
    assert(this._obj % 2 != 0, `expected '${this._obj}' to be odd`)
})

chai.Assertion.addMethod("Success", function () {
    assert.isOk(this._obj)
    assert(this._obj === "Success", `expected '${this._obj}' to be "Success"`)
})