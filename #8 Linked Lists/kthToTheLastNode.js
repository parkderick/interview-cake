// You have a linked list ↴ and want to find the kkth to last node.

// Write a function kthToLastNode() that takes an integer kk and the headNode of a singly-linked list, and returns the kkth to last node in the list.

// Time: O(n)
// Space: O(n)

function kthToLastNode(k, head) {
  var current = head;
  var storage = {};
  var index = 0;
  while (current) {
    storage[index] = current;
    index++;
    current = current.next;
  }
  return storage[index - k];
}

// Time: O(n)
// Space: O(1)

function kthToLastNode(k, head) {
  var current = head;
  var counter = 0;
  while (current) {
    counter++;
    current = current.next;
  }
  var current = head;
  while (counter - k) {
    counter--;
    current = current.next;
  }
  return current;
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;


console.log(kthToLastNode(2, a))
