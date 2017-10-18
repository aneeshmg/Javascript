const array = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9]

let revArray = []
let n = array.length

array.map(o => {
    revArray[--n] = o
})

console.log(revArray)