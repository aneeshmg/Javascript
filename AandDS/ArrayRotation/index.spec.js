const rotate = require("./")
const assert = require("assert")
const utils = require("../utils/")


let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let k = 0

rotate(a, k).then(result => {
    assert(utils.arraysEqual(result, a))
}).catch(e => console.log(e))