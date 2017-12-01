'use strict';

const sinon = require("sinon")
const program = require("./CaesarCipher")
const encrypt = program.encrypt

describe("Caesar cipher test cases", () => {

    describe("Test cases of the encrypt function", () => {

        it("should return promise which resolves into cipher-text", done => {
            encrypt("text", 0).then(message => {
                console.log(message)
                expect(message).toBe("text")
                done()
            })
        })
        
        it("should execute callback", () => {
            let callback = sinon.spy();
            encrypt("text", 0, callback)
            expect(callback.called).toBe(true)
            expect(callback.calledOnce).toBe(true)
            expect(callback.calledWith(null, "text")).toBe(true)
        })
    })

})