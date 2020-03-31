// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴
// You can assume the input string only contains lowercase letters.

// Time: O(n);
// Space: O(n) or O(1);

// The ASCII character set has just 128 different characters (standard english letters and punctuation), while Unicode has 110,000 (supporting several languages and some icons/symbols). We might want to treat our number of possible characters in our character set as another variable kk and say our space complexity is O(k)O(k). Or we might want to just treat it as a constant, and say our space complexity is O(1)O(1).

function permutationPalindrome(string) {
  var letters = {};
  var result = 0;
  for (var i = 0; i < string.length; i++) {
    if (!letters[string[i]]) {
      letters[string[i]] = 1;
    } else {
      letters[string[i]] += 1;
    }
  }
  for (var letter in letters) {
    if (letters[letter] % 2 === 1) {
      result += 1;
    }
  }
  return result <= 1;
}


var test = 'civic';
var test = 'civici';

console.log(permutationPalindrome(test));