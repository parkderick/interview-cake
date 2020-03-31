// Write a function that takes an array of characters and reverses the letters in place. ↴

// Time: O(n);
// Space: O(1);

function reverseStringInPlace(s) {
  for (var i = 0, j = s.length-1; i < s.length; i++, j--) {
    var first = s[i];
    var second = s[j];
    s[i] = second;
    s[j] = first;
    if (i >= j) {
      return s;
    }
  }
}

console.log(reverseStringInPlace(['h', 'e', 'l', 'l', 'o']))
// console.log(reverseStringInPlace(['b', 'e', 'a', 'r']))