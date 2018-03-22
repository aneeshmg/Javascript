const utils = require("./")

describe("Test cases for utils", () => {
    // Test 'arraysEqual(array1, array2)'
    it("should compare two arrays and return true if arrays are equal", () => {
        expect(utils.arraysEqual([0, 1, 2, 3, 4], [0, 1, 2, 3, 4])).toBe(true)
    })
    it("should return false if the two arrays are not equal", () => {
        expect(utils.arraysEqual([0, 1, 2, 3, 4], [])).toBe(false)
    })

    // Test 'isPalindrome(string)'
    it("should verify that the string is a palindrome", () => {
        expect(utils.isPalindrome("malayalam")).toBe(true)
    })
    it("should return false when string is not a palindrome", () => {
        expect(utils.isPalindrome("abcd")).toBe(false)
    })
})