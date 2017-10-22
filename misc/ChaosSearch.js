const list = [4, 3, 6, 1, 8, 9, 2, 0, 7, 5]
let i = 0 // a counter - for debugging purposes & to measure how many times 'search()' was called

// A chaotic way to search for an element in an array
// search() will return the index of the element being searched for in the array
// The search behaviour is 'chaotic' which means, although you may get a very quick result, there is a possibility of you getting 'undefined' as a result
// You should use Array.indexOf(), this is just an experiment
Array.prototype.search = function (e) {
    let n = this.length
    i++
    while (n--) {
        check = Math.floor(Math.random() * this.length)
        if (this[check] == e)
            return check
        if(!n)
            this.search(e)
    }
}

console.log(list.search(1))
console.log(i)