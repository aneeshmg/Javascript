// TDD

const program = require("./CharacterFrequency")

describe("Count the most frequent character in string", () => {
    it("work for simple string(1)", () => {
        expect(program("aaa bb cccc")).toBe('c')
    })
    it("work for simple string(2)", () => {
        expect(program("aaaa bbb cc").toBe('a'))
    })
})