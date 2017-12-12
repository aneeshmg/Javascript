// get intersection (common elements) of two arrays
const intersectionFunction = (a1, a2) => {
    return a1.filter(e => a2.includes(e))
}
// get union of two arrays
const unionFunction = (a1, a2) => {
    return uniq(a1.concat(a2))
}
// perform set subtraction ie setA minus setB
const subtract = (a1, a2) => {
    return a1.filter(e => a2.indexOf(e) < 0)
}
// to return unique elements of array/ remove duplicates
const uniq = arr => [...new Set(arr)]

// To get value of top of stack
Array.prototype.top = function () {
    return this[this.length - 1]
}

const program = input => {
    return new Promise((res, rej) => {
        if(!input) rej(new Error("input cannot be empty"))

        let stack = []
        let state = []
        let From = []
        let To = []
        let output = [[]]
        for (let i = 0; i < input.length; i++) {
            From.push(input[i].from)
            To.push(input[i].to)
        }
        From = uniq(From)
        To = uniq(To)
        const intersection = intersectionFunction(From, To)
        let collect = []

        for (let i = 0; i < intersection.length; i++) {
            for(let j = 0; j < input.length; j++) {
                if(intersection[i] === input[j].from || intersection[i] === input[j].to)
                    collect.push(input[j])
            }
        }
        routes = uniq(collect)
        
        From.length = 0
        To.length = 0

        for (let i = 0; i < routes.length; i++) {
            From.push(routes[i].from)
            To.push(routes[i].to)
        }
        From = uniq(From)
        To = uniq(To)
        // const fUt = unionFunction(From, To)
        // const fIt = intersectionFunction(From, To)
        // const filtered = subtract(fUt, fIt)
        // const startPoints = intersectionFunction(From, filtered)
        // const endPoints = intersectionFunction(To, filtered)
        const startPoints = subtract(From, To)
        const endPoints = subtract(To, From)

        if(routes.length <= 1)
            res([input[0]])
        else {
            //EDIT: this was only picking all possible chains, not the longest
            let possibleRoutesIndex = 0
            for(let i = 0; i < startPoints.length; i++) {
                // Initialization
                routes.filter(e => e.from === startPoints[i])
                    .map(e => {
                        stack.push(e)
                    })
                // populate the routes using custon DFS
                while(stack.top()) {
                    state = state.filter(e => e !== undefined)
                    output[possibleRoutesIndex].unshift(...state)
                    output[possibleRoutesIndex].push(stack.pop())
                    routes.filter(e => e.from === output[possibleRoutesIndex][output[possibleRoutesIndex].length - 1].to)
                        .map(e => {
                            stack.push(e)
                            state.push(output[possibleRoutesIndex][output[possibleRoutesIndex].length - 1])
                            if (endPoints.includes(stack[stack.length - 1].to)) {
                                output[possibleRoutesIndex].push(stack.pop())
                                possibleRoutesIndex++
                                output[possibleRoutesIndex] = []
                                state.pop()
                            }
                        })

                }
                state.length = 0
                
            }
            // cleanup (get only uniques)
            output = output.map(e => {
                e = Array.from(e.reduce((m, t) => m.set(t.from, t), new Map()).values())
                return e
            })
            // Pick the longest route
            const longest = output.filter(e => e !== [] || e !== undefined)
                    .reduce((acc, curr) => {
                        return curr.length > acc.length? curr : acc
                    }, [])
            
            res(longest)
        }
        
    })
}

module.exports = {
    program: program,
    utils: {
        intersectionFunction : intersectionFunction,
        unionFunction : unionFunction,
        subtract : subtract,
        uniq : uniq
    }
}