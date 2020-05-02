// I have an array of n + 1 numbers. Every number in the range 1..n appears once except for one number that appears twice.

// Write a function for finding the number that appears twice.

// Time: O(n)
// Space: O(1)

function whichAppearsTwice(array) {
  var previous;
  for (var i = 0; i < array.length; i++) {
    if (previous === array[i]) {
      return array[i];
    }
    previous = array[i];
  }
}

const test = [1, 2, 2];
console.log(whichAppearsTwice(test));