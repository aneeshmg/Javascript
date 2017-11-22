"use strict"
const assert = require("assert")
const utils = require("../utils/")
const rotator = require("./")
const rotateR = rotator.Right
const rotateL = rotator.Left


// Right rotation test cases
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const aRotateR1 = [9, 1, 2, 3, 4, 5, 6, 7, 8]
const aRotateR2 = [8, 9, 1, 2, 3, 4, 5, 6, 7]
const aRotateR3 = [7, 8, 9, 1, 2, 3, 4, 5, 6]
const aRotateR9 = a
const aRotateR10 = aRotateR1

let k = 0
rotateR(a, k).then(result => {
    assert(utils.arraysEqual(result, a))
}).catch(e => console.log(e))

k = 1
rotateR(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotateR1))
}).catch(e => console.log(e))

k = 2
rotateR(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotateR2))
}).catch(e => console.log(e))

k = 3
rotateR(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotateR3))
}).catch(e => console.log(e))

k = 9
rotateR(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotateR9))
}).catch(e => console.log(e))

k = 10
rotateR(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotateR10))
}).catch(e => console.log(e))


// Left rotation test cases
const aRotateL1 = [2, 3, 4, 5, 6, 7, 8, 9, 1]
const aRotateL2 = [3, 4, 5, 6, 7, 8, 9, 1, 2]
const aRotateL3 = [4, 5, 6, 7, 8, 9, 1, 2, 3]
const aRotateL9 = a
const aRotateL10 = aRotateL1

k = 0
rotateL(a, k).then(result => {
    assert(utils.arraysEqual(result, a))
}).catch(e => console.log(e))

k = 1
rotateL(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotateL1))
}).catch(e => console.log(e))

k = 2
rotateL(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotateL2))
}).catch(e => console.log(e))

k = 3
rotateL(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotateL3))
}).catch(e => console.log(e))

k = 9
rotateL(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotateL9))
}).catch(e => console.log(e))

k = 10
rotateL(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotateL10))
}).catch(e => console.log(e))