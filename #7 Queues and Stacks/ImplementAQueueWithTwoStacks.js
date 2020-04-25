// Implement a queue ↴ with 2 stacks. ↴ Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO).

// Optimize for the time cost of mm calls on your queue. These can be any mix of enqueue and dequeue calls.

// Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.

// Time: O(1)
// Space: O(m) where m is the number of operations performed on the stack.

class Queue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  enqueue(value) {
    this.inStack.push(value)
  }
  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop())
      }
    }
    return this.outStack.pop();
  }
}

var test = new Queue;
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
test.enqueue(6);
test.enqueue(4);
test.dequeue();

console.log(test);