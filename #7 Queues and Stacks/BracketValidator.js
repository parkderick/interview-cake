// You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.

// Let's say:

// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

// Examples:

// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false

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

function bracketValidator(string) {
  var stack = new Stack;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '{' || string[i] === '(' || string[i] === '[') {
      stack.push(string[i])
    }
    if (string[i] === '}' || string[i] === ')' || string[i] === ']') {
      var dequeue = stack.pop();
      if (string[i] === '}' && dequeue !== '{') {
        return false;
      }
      if (string[i] === ')' && dequeue !== '(') {
        return false;
      }
      if (string[i] === ']' && dequeue !== '[') {
        return false;
      }
    }
  }
  return true;
}

function bracketValidator(string) {
  var stack = new Stack;
  var brackets = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '{' || string[i] === '(' || string[i] === '[') {
      stack.push(string[i])
    }
    if (string[i] === '}' || string[i] === ')' || string[i] === ']') {
      var dequeue = stack.pop();
      if (brackets[string[i]] !== dequeue) {
        return false;
      }
    }
  }
  return true;
}

var test1 = "{ [ ] ( ) }"
var test2 = "{ [ ( ] ) }"
var test3 = "{ [ }"
var test4 = "{ [ ( ] ) }"
console.log(bracketValidator(test1));
console.log(bracketValidator(test2));
console.log(bracketValidator(test3));
console.log(bracketValidator(test4));