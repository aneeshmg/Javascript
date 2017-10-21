// Case insensitive palindrome check, a functional approach
String.prototype.isPalindrome = function() {
    const _str = this.toString().replace(/\W/g, '').toLowerCase();
    return (_str == _str.split('').reverse().join(''));
}

// Usage:
let str = new String("Malayalam")
console.log(str.isPalindrome()) // => true

str = new String("something")
console.log(str.isPalindrome()) // => false