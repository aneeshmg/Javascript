const program = require("./").program
const utils = require("./").utils
const intersectionFunction = utils.intersectionFunction
const unionFunction = utils.unionFunction
const subtract = utils.subtract
const uniq = utils.uniq
const expect = require("chai").expect


describe("Longest journey finder tests", () => {

    describe("Program test cases", () => {

        it("should reject promise if input is empty", done => {
            program().catch(e => {
                expect(e).to.be.instanceof(Error)
                expect(e.message).to.be.equal("input cannot be empty")
                done()
            })
        })

        it("base case", done => {
            const input = [{
                    from: "A",
                    to: "B"
                },
                {
                    from: "B",
                    to: "C"
                },
                {
                    from: "X",
                    to: "Y"
                },
                {
                    from: "C",
                    to: "D"
                }
            ]
            const expectedOutput = [{
                    from: "A",
                    to: "B"
                },
                {
                    from: "B",
                    to: "C"
                },
                {
                    from: "C",
                    to: "D"
                }
            ]
            program(input).then(res => {
                expect(res).to.deep.equal(expectedOutput)
                done()
            })
        })

        it("should return array of size 1 in case of longest possible chain is one", done => {
            const input = [{
                    from: "A",
                    to: "B"
                },
                {
                    from: "X",
                    to: "Y"
                },
                {
                    from: "L",
                    to: "M"
                }
            ]
            const expectedOutput = [{
                from: "A",
                to: "B"
            }]
            program(input).then(res => {
                expect(res).to.deep.equal(expectedOutput)
                done()
            })
        })

        it("should work for complex case(1)", done => {
            const input = [{
                    from: "L",
                    to: "M"
                },
                {
                    from: "X",
                    to: "Y"
                },
                {
                    from: "K",
                    to: "J"
                },
                {
                    from: "A",
                    to: "C"
                },
                {
                    from: "P",
                    to: "Q"
                },
                {
                    from: "Y",
                    to: "Z"
                },
                {
                    from: "Z",
                    to: "A"
                }
            ]
            const expectedOutput = [{
                    from: 'X',
                    to: 'Y'
                },
                {
                    from: 'Y',
                    to: 'Z'
                },
                {
                    from: 'Z',
                    to: 'A'
                },
                {
                    from: 'A',
                    to: 'C'
                }
            ]
            program(input).then(res => {
                expect(res).to.deep.equal(expectedOutput)
                done()
            })
        })

        it("should work for complex case(2)", done => {
            const input = [{
                    from: "A",
                    to: "B"
                },
                {
                    from: "C",
                    to: "D"
                },
                {
                    from: "C",
                    to: "X"
                },
                {
                    from: "B",
                    to: "C"
                },
                {
                    from: "D",
                    to: "E"
                },
                {
                    from: "P",
                    to: "Q"
                },
                {
                    from: "M",
                    to: "N"
                },
                {
                    from: "Q",
                    to: "R"
                },
                {
                    from: "B",
                    to: "X"
                },
                {
                    from: "B",
                    to: "D"
                },
                {
                    from: "A",
                    to: "D"
                },
                {
                    from: "R",
                    to: "S"
                }
            ]
            const expectedOutput = [{
                    from: "A",
                    to: "B"
                },
                {
                    from: "B",
                    to: "C"
                },
                {
                    from: "C",
                    to: "D"
                },
                {
                    from: "D",
                    to: "E"
                }
            ]
            program(input).then(res => {
                expect(res).to.deep.equal(expectedOutput)
                done()
            })
        })
    })

    describe("utils test cases", () => {

        it("should return unique elments of array", () => {
            const input = ['a', 'a', 'b', 'c']
            const expectedOutput = ['a', 'b', 'c']
            expect(uniq(input)).to.deep.equal(expectedOutput)
        })

        it("should perform intersection of two arrays", () => {
            const arrayA = ['a', 'b', 'c', 'd']
            const arrayB = ['a', 'b', 'c', 'x', 'l']
            const expectedOutput = ['a', 'b', 'c']
            expect(intersectionFunction(arrayA, arrayB)).to.deep.equal(expectedOutput)
        })

        it("should perform union of two arrays", () => {
            const arrayA = ['a', 'b', 'd']
            const arrayB = ['a', 'b', 'x', 'l']
            const expectedOutput = ['a', 'b', 'd', 'x', 'l']
            expect(unionFunction(arrayA, arrayB)).to.deep.equal(expectedOutput)
        })
        it("should perform subtraction of two arrays/sets", () => {
            const arrayA = ['a', 'b', 'd']
            const arrayB = ['a', 'b', 'x', 'l']
            const expectedOutput1 = ['d']
            const expectedOutput2 = ['x', 'l']
            expect(subtract(arrayA, arrayB)).to.deep.equal(expectedOutput1)
            expect(subtract(arrayB, arrayA)).to.deep.equal(expectedOutput2)
        })
    })
})