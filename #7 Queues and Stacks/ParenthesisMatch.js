// I like parentheticals (a lot).

// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

// Time: O(n);
// Space: O(n);

class Stack {
  constructor() {
    this.storage = [];
  }
  push(value) {
    this.storage.push(value);
  }
  pop() {
    return this.storage.pop();
  }
}

function ParanthesisMatch(string) {
  var stack = new Stack;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push(i)
    }
    if (string[i] === ')') {
      if (stack.storage.length === 1) {
        return i;
      }
      stack.pop();
    }
  }
}

// Time: O(n);
// Space: O(1);

function ParanthesisMatch(string) {
  var openParanthesis = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      openParanthesis += 1;
    } else if (string[i] === ')') {
      openParanthesis -= 1;
      if (openParanthesis === 0) {
        return i;
      }
    }
  }
}

var test = ParanthesisMatch("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.");
console.log(test)