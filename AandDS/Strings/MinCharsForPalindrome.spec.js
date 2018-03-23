// This follows TDD
const program = require("./MinCharsForPalindrome")

describe("Tests for an algorithm to find the least number of characters to be added to a string to make it a palindrome", () => {
    it("case 1: abcba", () => {
        expect(program("abcba")).toBe(0)
    })
    it("case 2: abab", () => {
        expect(program("abab")).toBe(1)
    })
    it("case 3: abcde", () => {
        expect(program("abcde")).toBe(4)
    })
    it("case 4: abca", () => {
        expect(program("abca")).toBe(3)
    })
})