// This is a mixin
let sayHiMixin = {
    sayHi() {
        console.log("Hello " + this.name)
    },
    sayBye() {
        console.log("Bye " + this.name)
    }
}
// Using the mixin - First create a class/using 'class' or function as below:
// Using class:
// class User {
//     constructor(name) {
//         this.name = name
//     }
// }
// Using 'function'
let User = function(name) {
    this.name = name
}
// Second - 'Mix-in' the methods of the mixin to this newly defined class
Object.assign(User.prototype, sayHiMixin)

// Now you can use the mix-ed in methods like this - 
new User("LOL").sayHi()
new User("OH LOL").sayBye()