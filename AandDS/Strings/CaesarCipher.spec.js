'use strict';

const sinon = require("sinon")
const program = require("./CaesarCipher")
const encrypt = program.encrypt

describe("Caesar cipher test cases", () => {

    describe("Test cases of the encrypt function", () => {

        it("should return promise", () => {
            encrypt("text").then(m => expect(m).toBe("text"))
        })
        
        it("should execute callback", () => {
            let callback = sinon.spy();
            encrypt("text", callback)
            expect(callback.called).toBe(true)
            expect(callback.calledOnce).toBe(true)
            expect(callback.calledWith(null, "text")).toBe(true)
        })
    })

})