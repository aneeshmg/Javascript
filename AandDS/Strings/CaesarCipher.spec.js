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
        
        it("should execute callback with cipher-text", () => {
            let callback = sinon.spy();
            encrypt("text", 0, callback)
            expect(callback.called).toBe(true)
            expect(callback.calledOnce).toBe(true)
            expect(callback.calledWith(null, "text")).toBe(true)
        })

        it("should encrypt the text (Promise)", done => {
            encrypt("text", 1).then(message => {
                expect(message).toBe("ufyu")
                done()
            })
        })

        it("should encrypt the text (Callback)", () => {
            let callback = sinon.spy();
            encrypt("text", 1, callback)
            expect(callback.called).toBe(true)
            expect(callback.calledOnce).toBe(true)
            expect(callback.calledWith(null, "ufyu")).toBe(true)
        })

        it("should encrypt alphanumeric text (Promise)", done => {
            encrypt("text123", 1).then(message => {
                expect(message).toBe("ufyu234")
                done()
            })
        })

        it("should encrypt alphanumeric text with negative key (Promise)", done => {
            encrypt("text123", -1).then(message => {
                expect(message).toBe("sdws012")
                done()
            })
        })
    })

})