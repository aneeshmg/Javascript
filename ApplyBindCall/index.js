let User = {
    firstname: "John",
    lastname: "Doe",
}
const userAddress = [
    "blah blah1",
    "blah blah2",
    "city",
    "state, etc"
]
let greeting = null
let address = null

function generateGreeting(title) {
    return `${title}. ${this.firstname} ${this.lastname}`
}

function formatAddress(...addressLines) {
    let address = []
    let line = 0
    for (addressLine of addressLines) {
        // perform any check on the address line here
        address.push(addressLine)
        // Update the user object
        this[`addressline${++line}`] = addressLine
    }
    // also return the formatted address
    return address.join(', ')
}

// Usage of 'call()'
greeting = generateGreeting.call(User, "Mr")
console.log('Using "call()"', greeting)

// Usage of 'apply()'
let anotherUser = User
address = formatAddress.apply(User, userAddress)
console.log(address)
console.log(User)

// Usage of 'bind()'
let conjureAddress = formatAddress.bind(anotherUser)
address = conjureAddress(userAddress)
console.log(anotherUser)

// Refer this link for more info on 'bind()' - https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind