const utils = require("../utils")

module.exports = input => {
    let count = 0
    if(utils.isPalindrome(input)) return count
    
    for(let i = 1; i < input.length; i++) {
        let reflection = input.substr(0,i).split("").reverse().join("")
        count++
        if(utils.isPalindrome(input.concat(reflection)))
            return count
    }
}