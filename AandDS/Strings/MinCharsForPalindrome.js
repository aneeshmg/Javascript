const utils = require("../utils")

module.exports = input => {
    if(utils.isPalindrome(input)) return 0
    else return 1
}