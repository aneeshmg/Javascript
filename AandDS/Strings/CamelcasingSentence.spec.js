const program = require("./CamelcasingSentence")

describe("Camelcasing the sentence test cases", () => {

    it("work for simple sentence", () => {
        const inputSentence = "This is a sentence"
        const outputSentence = "ThisIsASentence"
        expect(program(inputSentence)).toBe(outputSentence)
    })

    it("work for simple sentence(2)", () => {
        expect(program("a")).toBe("A")
    })

    it("work for simple sentence(3)", () => {
        expect(program("Aa")).toBe("Aa")
    })

    it("work for simple sentence(4)", () => {
        expect(program("aaB bbC")).toBe("AaBBbC")
    })

    it("work for complex sentence(1)", () => {
        expect(program("Thisisasentence")).toBe("Thisisasentence")
    })

    it("work for complex sentence(2)", () => {
        expect(program("Thisisasen tence")).toBe("ThisisasenTence")
    })

    it("work for edge case(1)", () => {
        expect(program("")).toBe('')
    })
    it("work for edge case(2)", () => {
        expect(program(" ")).toBe(' ')
    })
    it("work for edge case(3)", () => {
        expect(program(null)).toBe(null)
    })
    it("work for edge case(4)", () => {
        expect(program(undefined)).toBe(undefined)
    })
})