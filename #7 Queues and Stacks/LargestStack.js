// You want to be able to access the largest element in a stack. ↴

// You've already implemented this Stack class:
// JavaScript
// Use your Stack class to implement a new class MaxStack with a method getMax() that returns the largest element in the stack. getMax() should not remove the item.

// Your stacks will contain only integers.

class MaxStack {
  constructor() {
    this.items = [];
    this.max = [];
  }
  push(value) {
    this.items.push(value);
    if (this.max.length === 0 || value >= this.max[this.max.length - 1]) {
      this.max.push(value)
    }
  }
  pop() {
    var item = this.items.pop();
    if (item === this.max[this.max.length - 1]) {
      this.max.pop();
    }
    return item;
  }
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items.length[this.items.length - 1];
  }
  getMax() {
    return this.max[this.max.length - 1];
  }
}

var test = new MaxStack;
test.push(1);
test.push(2);
test.push(3);
test.push(6);
test.push(4);
test.pop();
test.pop();
test.pop();

console.log(test.getMax());