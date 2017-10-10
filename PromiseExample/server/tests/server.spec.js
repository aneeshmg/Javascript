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
              expect(res.text).to.equal("Service online.")
              done()
            })
    })
  })
})
