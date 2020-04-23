// Write a function fib() that takes an integer nn and returns the nnth Fibonacci ↴ number.

// Let's say our Fibonacci series is 0-indexed and starts with 0. So:

// fib(0);  // => 0
// fib(1);  // => 1
// fib(2);  // => 1
// fib(3);  // => 2
// fib(4);  // => 3
// ...

// Time: O(2^n);
// Space: O(n);

function fib(index) {
  if (index === 0) {
    return 0;
  }
  if (index === 1) {
    return 1;
  }

  return fib(index-1) + fib(index-2)
}

// Time: O(n);
// Space: O(1);

function fib(n) {
  if (n < 0) {
    throw new Error('Index was negative. No such thing as a negative index in a series.');
  } else if (n === 0 || n === 1) {
    return n;
  }
  let prevPrev = 0;
  let prev = 1; 
  let current;   

  for (let i = 1; i < n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }
  return current;
}
console.log(fib(5));