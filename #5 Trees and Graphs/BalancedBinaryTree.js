// Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).

// A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.

class Tree {
  constructor(node) {
    this.value = node;
    this.right = null;
    this.left = null;
  }
  insert(value) {
    var current = this;
    while (current) {
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Tree(value);
          break;
        }
      } else {
        if (current.right) {
          current = current.left;
        } else {
          current.left = new Tree(value);
          break;
        }
      }
    }
  }
}

// Time: O(n)
// Space: O(n)
function isBalanced(treeRoot) {
  if (!treeRoot) {
    return true;
  }
  
  const depths = [];
  const nodes = [];
  nodes.push([treeRoot, 0]);
  
  while (nodes.length) {
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];
  
    if (!node.left && !node.right) {
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
        if (
          (depths.length > 2)
          || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        }
      }
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  return true;
}