'use strict'

// A function 'add' to add 3 numbers using currying
let add = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

// 'add' invoked this way..
console.log(add(1)(2)(3))

/* Practical application */
let avg = (...n) => {
    let total = 0
    for(let value of n)
        total += value
    return total / n.length
}
console.log('Simple average - ', avg(1,2,3))

let mergeAndAverage = (fn, ...n) => {
    return (...m) => {
        return fn.apply(this, n.concat(m))
    }
}
let doAvg = mergeAndAverage(avg, 1, 2, 3)
console.log('Merge [4,5,6] into [1,2,3] and average - ', doAvg(4, 5, 6))

/* Why do this(merge)? running through the array and summing is expensive therefore average of [1,2,3] can be cached and sent to currying function using closures */
