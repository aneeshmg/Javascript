const program = require("./ClosestInArray")

describe("Test cases for Closest in array program", () => {

    it("program returns closest number(1)", () => {
        expect(program([1, 2, 3], 10)).toBe(3)
    })

    it("program returns closest number(2)", () => {
        expect(program([10, 2, 31], 11)).toBe(10)
    })

    it("program returns closest number(3)", () => {
        expect(program([5, 2, 13, 34, 12, 89, 50], 10)).toBe(12)
    })

    it("program returns closest number(4)", () => {
        expect(program([1, 1, 1, 1, 1], 10)).toBe(1)
    })

    it("program returns closest number(5)", () => {
        expect(program([-1, -10, 21, 10, 11], 0)).toBe(-1)
    })
})