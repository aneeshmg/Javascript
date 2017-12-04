// A program to encrypt and decrypt text using the Caesar cipher

'use strict';

const transform = (text, type, key) => {
    return text
        .split('')
        .map(e => type === 'encrypt'? String.fromCharCode(e.charCodeAt() + key) : String.fromCharCode(e.charCodeAt() - key))
        .join('')
}

exports.encrypt = (message, key, callback) => {
    return new Promise((res, rej) => {
        let encrypted = transform.call(null, message, 'encrypt', key)

        if (callback) callback(null, encrypted)
        res(encrypted)
    })
}

exports.decrypt = (message, key, callback) => {
    return new Promise((res, rej) => {
        let encrypted = transform.call(null, message, 'decrypt', key)

        if (callback) callback(null, encrypted)
        res(encrypted)
    })
}