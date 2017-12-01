// A program to encrypt and decrypt text using the Caesar cipher

'use strict';

exports.encrypt = (message, key, callback) => {
    return new Promise((res, rej) => {
        let encrypted = message
            .split('')
            .map(e => String.fromCharCode(e.charCodeAt() + key))
            .join('')
        // console.log(encrypted)
        if(callback) callback(null, encrypted)
        res(encrypted)
    })
}