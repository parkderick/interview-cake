// Write a function to check that a binary tree ↴ is a valid binary search tree. ↴
// Here's a sample binary tree node class:

var BST = require('../Data-Structures/BST');
var BT = require('../Data-Structures/BT');

// Time: O(n);
// Space: O(n);

function isBinarySearchTree(tree) {
  var isBST = true;
  function recurseTree(node, min, max) {
    if (node.value <= min || node.value >= max) {
      isBST = false;
    }
    node.left && recurseTree(node.left, min, node.value);
    node.right && recurseTree(node.right, node.value, max);
  }
  recurseTree(tree, -Infinity, Infinity);
  return isBST;
}

var test1 = new BST(5);
test1.insert(3);
test1.insert(6);
test1.insert(7);
test1.insert(4);
test1.insert(1);
test1.insert(11);
test1.insert(9);
console.log(binarySearchChecker(test1));

var test2 = new BT(6);
test2.insertLeft(3).insertRight(9);
test2.insertRight(7).insertRight(8);
console.log(isBinarySearchTree(test2))


