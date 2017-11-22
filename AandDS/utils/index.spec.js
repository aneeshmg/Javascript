const utils = require("./")

// Test 'arraysEqual(array1, array2)'
let a1 = [0, 1, 2, 3, 4]
let b1 = [0, 1, 2, 3, 4]
if(utils.arraysEqual(a1, b1)) {
    console.log("arraysEqual test 1 - passing")
}
else console.log("arraysEqual test 1 - failed")

if(!utils.arraysEqual(a1, [])) {
    console.log("arraysEqual test 2 - passing")
}
else console.log("arraysEqual test 1 - failed")