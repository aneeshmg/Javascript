// A program to find the closest number to a given number in an array
// Ex: given [5, 2, 13, 34, 12, 89, 50] and 10, output should be 12

// Two approaches demonstrated to show the distinct them
'use strict';

exports.Functional = (list, number) => {

    /* Using functional programming */
    // Using map-reduce to pick the least of 'deltas'
    const least = list
        .map(e => Math.abs(number - e))
        .reduce((acc, curr) => acc < curr ? acc : curr)
    return list.indexOf(least) !== -1? least + number : (number - least)

}

exports.Imperative = (list, number) => {

    // /* Using imperative approach */
    let deltas = []
    // First compute deltas
    for (let i = 0; i < list.length; i++)
        deltas.push(Math.abs(number - list[i]))

    // Pick the least of deltas ie "closest"
    let least = deltas.sort()[0]
    let closest1 = (number - least)
    let closest2 = number + least
    
    return list.indexOf(closest1) !== -1 ? closest1 : closest2

}