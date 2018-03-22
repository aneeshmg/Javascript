const program = require("./MinCharsForPalindrome")

describe("Tests for an algorithm to find the least number of characters to be added to a string to make it a palindrome", () => {
    it("case1: abcba", () => {
        expect(program()).toBe(0)
    })
})