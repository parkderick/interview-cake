// Write a recursive function for generating all permutations of an input string. Return them as a set.

// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

// To start, assume every character in the input string is unique.

// Your function can have loops—it just needs to also be recursive.

function recursiveStringPermutations(word) {
  var result = [];
  var innerRecursion = (words, string) => {
    if (words.length < 1) {
      result.push(string);
    }
    for (var i = 0; i < words.length; i++) {
      var temp = words.substring(0, i) + words.substring(i + 1, words.length);
      var temp1 = string + words[i];
      innerRecursion(temp, temp1);
    }
  }
  innerRecursion(word, '');
  return result;
}

console.log(recursiveStringPermutations('abcd'));


