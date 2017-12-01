const program = require("./ClosestInArray")

describe("Test cases for Closest in array program", () => {

    it("program returns closest number(1)", () => {
        expect(program([1, 2, 3], 10)).toBe(3)
    })

    it("program returns closest number(2)", () => {
        expect(program([10, 2, 31], 11)).toBe(10)
    })
})