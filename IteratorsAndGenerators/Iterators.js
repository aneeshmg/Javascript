// What is Iterator and how to use it?
// Iterator is like a pointer object which points to current index of an array along with a boolean key to indicate if it has hit the end of the array or not

const theArray = [1, 2, 3, 4, 5, 6, 7]

const iterator = theArray[Symbol.iterator]()

console.log(iterator.next()) // -> { value: 1, done: false }
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next()) // -> { value: 7, done: false }
console.log(iterator.next()) // -> { value: undefined, done: true }
// Use it this way or loop through it

const newIterator = theArray[Symbol.iterator]()
do {
    // Using var instead of 'let' to not-have block scope, else 'i' would be undefined in the loop condition
    var i = newIterator.next()
    console.log(i.value)
} while (!i.done)