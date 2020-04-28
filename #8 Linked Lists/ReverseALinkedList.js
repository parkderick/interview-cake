// Hooray! It's opposite day. Linked lists go the opposite way today.

// Write a function for reversing a linked list. ↴ Do it in place. ↴

// Your function will have one input: the head of the list.

// Your function should return the new head of the list.

// Here's a sample linked list node class:

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Time: O(n)
// Space: O(1)

function reverseLinkedList(linkedList) {
  var current = linkedList;
  var previous = null;
  var next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

console.log(reverseLinkedList(a));