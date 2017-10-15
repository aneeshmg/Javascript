// Concept: in simple terms it is just a replacement for 'theArray' of the iterators example, but uses syntactic sugar (* & yield) and lazy evaluation
function* theSimpleGenerator() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    yield 6
    yield 7
}
const newIterator = theSimpleGenerator()
do {
    // Using var instead of 'let' to not-have block scope, else 'i' would be undefined in the loop condition
    var i = newIterator.next()
    console.log(i.value)
} while (!i.done)

// A rather interesting example - random even number generator
function* randomEvenNumberGenerator() {
    // If this was not a generator, we would get a stack overflow cause of the infinite loop inside
    while (true) {
        // A log here to see the frequency of execution of this loop - to prove lazy evaluation
        // Lazy evaluation - yield is called only when 'next()' is invoked
        console.log('called now..')
        // Add a '+ 1' to the below expression to convert it into an 'Odd' number variation
        yield Math.floor((Math.random() * 100)) * 2
    }
}
// Now to print 10 random even numbers [0-100]
const spitOutEven = randomEvenNumberGenerator()
for (let i = 0; i < 10; i++) {
    console.log(spitOutEven.next().value)
}

// Using generator-in-generator (generator-ception!)
function* randomNumberGeneratorPlus() {
    yield* randomEvenNumberGenerator()
}

// Spit out another 10 random numbers using the new generator (which yields the value of the previously defined generator!)
const spitOutPlus = randomNumberGeneratorPlus()
for (let i = 0; i < 10; i++) {
    console.log(spitOutPlus.next().value)
}

// TODO: try synchronous AJAX requests packaged in a generator!
// function* AJAXGenerator() {
//     yield request1()
//     yield request2()
//     .
//     .
// }