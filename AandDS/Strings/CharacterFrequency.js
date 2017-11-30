// A program to return/print the word character that occurs the most in a string
'use strict';

module.exports = function (text) {

    let counts = []

    for (let i = 0; i < text.length; i++)
        counts[text[i]] = 0

    for (let i = 0; i < text.length; i++) {
        counts[text[i]]++
    }
    console.log(counts)

    const keys = Object.keys(counts)
    let longest = 0
    let index = 0
    for(let i = 0; i < keys.length; i++) {
        if(longest < counts[keys[i]]) {
            longest = counts[keys[i]]
            index = i
        }
    }
    
    return keys[index]

}