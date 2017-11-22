const rotate = require("./")
const assert = require("assert")
const utils = require("../utils/")


let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let k = 0
let aRotate1 = [9, 1, 2, 3, 4, 5, 6, 7, 8]
let aRotate2 = [8, 9, 1, 2, 3, 4, 5, 6, 7]
let aRotate3 = [7, 8, 9, 1, 2, 3, 4, 5, 6]
let aRotate9 = a
let aRotate10 = aRotate1

rotate(a, k).then(result => {
    assert(utils.arraysEqual(result, a))
}).catch(e => console.log(e))

k = 1
rotate(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotate1))
}).catch(e => console.log(e))

k = 2
rotate(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotate2))
}).catch(e => console.log(e))

k = 3
rotate(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotate3))
}).catch(e => console.log(e))

k = 9
rotate(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotate9))
}).catch(e => console.log(e))

k = 10
rotate(a, k).then(result => {
    assert(utils.arraysEqual(result, aRotate10))
}).catch(e => console.log(e))