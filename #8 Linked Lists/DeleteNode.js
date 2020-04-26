// Delete a node from a singly-linked list, ↴ given only a variable pointing to that node.

// The input could, for example, be the variable b below:

// Time: O(n)
// Space: O(1)

function deleteNode(target, node) {
  var current = node;
  var previous = node;
  while (current) {
    if (current.value === target.value) {
      if (current.next) {
        previous.next = current.next;
      } else {
        previous.next = null;
      }
    }
    previous = current;
    current = current.next;
  }
  return node;
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

console.log(deleteNode(b, a));