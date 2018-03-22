// Put all utility methods here

// Method to test if two arrays are equal
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    // TODO: variation of this when order does not matter
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  function isPalindrome(text) {
    return text === text.split("").reverse().join("")
  }

module.exports = {
    arraysEqual: arraysEqual,
    isPalindrome: isPalindrome
}