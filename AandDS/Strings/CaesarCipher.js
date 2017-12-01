// A program to encrypt and decrypt text using the Caesar cipher

'use strict';

exports.encrypt = (message, callback) => {
    return new Promise((res, rej) => {
        if(callback) callback(null, message)
        res(message)
    })
}