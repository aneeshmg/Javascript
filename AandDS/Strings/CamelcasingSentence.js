// A program to convert any given sentence to a camel cased sentence.
// Ex: "This is a sentence" will produce "ThisIsASentence"

'use strict';

module.exports = sentence => {

    if (sentence === null || sentence === undefined || sentence.length === 0) return sentence

    if(sentence.length === 1) return sentence.toUpperCase()

    return sentence.split(' ').map(e => e[0].toUpperCase() + e.substr(1)).join('')
}