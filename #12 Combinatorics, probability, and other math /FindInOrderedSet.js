// Suppose we had an array ↴ of n integers sorted in ascending order. How quickly could we check if a given integer is in the array?

// Time: O(lg n)
// Space: O(1)

function findInOrderedSet(array, target) {
  var partition = Math.floor(array.length / 2);
  var min = 0;
  var max = array.length - 1;
  while (min < max) {
    if (target === array[partition]) {
      return true;
    } else if (target > array[partition]) {
      min = partition;
      partition = Math.ceil((min + max) / 2)
    } else {
      max = partition;
      partition = Math.floor((min + max) / 2)
    }
  }
  return false;
}

var test = [1, 2, 3, 4, 5, 6];
var target = 6;

console.log(findInOrderedSet(test, target));