const User = {
    firstname: "John",
    lastname: "Doe"
}
let greeting = null;

function generateGreeting(title) {
    return `${title}. ${this.firstname} ${this.lastname}`
}

// Usage of 'call()'
greeting = generateGreeting.call(User, "Mr")
console.log('Using "call()"', greeting)