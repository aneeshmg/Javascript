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
address = formatAddress.apply(User, userAddress)
console.log(address)
console.log(User)