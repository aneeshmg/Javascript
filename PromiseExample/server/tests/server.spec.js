const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../server')
const assert = chai.assert
const expect = chai.expect

chai.use(chaiHttp)


describe('server-tests', () => {
  describe('Status check', () => {
    it('responds with service online message', (done) => {
      chai.request(app)
        .get('/_status')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.text).to.not.be.null
          expect(res.text).to.equal("Service online.")
          done()
        })
    })
  })
  describe('Server functionality', () => {
    it('should respond with number', (done) => {
      chai.request(app)
      .get('/handshake')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.an('object')
        expect(res).to.have.header('Content-type', 'application/json; charset=utf-8')
        expect(res.body).to.have.property('number').that.is.a('number')
        done()
      })
    })
    it('number should be odd', (done) => {
      chai.request(app)
        .get('/handshake')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(res.body).to.be.an('object')
          expect(res).to.have.header('Content-type', 'application/json; charset=utf-8')
          expect(res.body).to.have.property('number')
          expect(res.body.number).to.be.Odd()
          done()
        })
    })
  })
})

chai.Assertion.addMethod('Odd', function () {
  assert(this._obj % 2 != 0, 'expected #{this._obj} to be odd')
});
