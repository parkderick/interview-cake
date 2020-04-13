// Write a function to find the 2nd largest element in a binary search tree. ↴
var BST = require('../Data-Structures/BST');

// Time: O(lg n);
// Space: O(1);

function secondLargestElement(tree) {
  var current = tree;
  var previous = tree.value;

  while (current) {
    if (current.left && !current.right) {
      previous = Math.max(current.value, previous);
      current = current.left;
    } else if (current.right) {
      previous = Math.max(current.value, previous);
      current = current.right;
    } else if (!current.right && !current.left) {
      return Math.min(previous, current.value);
    }

  }
}

var test1 = new BST(5);
test1.insert(2);
test1.insert(8);
test1.insert(1);
console.log(secondLargestElement(test1));
test1.insert(3);
test1.insert(100);
test1.insert(98);
console.log(secondLargestElement(test1));
test1.insert(99);
console.log(secondLargestElement(test1));
test1.insert(101);
console.log(secondLargestElement(test1));