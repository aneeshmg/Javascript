// TDD

const program = require("./CharacterFrequency")

describe("Count the most frequent character in string", () => {
    it("work for simple string(1)", () => {
        expect(program("aaa bb cccc")).toBe('c')
    })
    it("work for simple string(2)", () => {
        expect(program("aaaa bbb cc")).toBe('a')
    })
    it("work for complex string(1)", () => {
        expect(program("a b c d e")).toBe('a')
    })
    it("work for complex string(2)", () => {
        expect(program("aa bb cc dd eee")).toBe('e')
    })
    it("work for complex string(3)", () => {
        expect(program("ababababababab")).toBe('a')
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