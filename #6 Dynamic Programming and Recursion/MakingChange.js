// Your quirky boss collects rare, old coins...

// They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given:

// an amount of money
// an array of coin denominations
// computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would output 4—the number of ways to make 44¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

// Time: O(n * m);
// Space: O(n);

function makingChange(amount, denominations) {
  if (amount === 0) {
    return 1
  } else if (amount < 0 || denominations.length === 0) {
    return 0;
  }
  for (var i = 0; i < denominations.length; i++) {
    return makingChange(amount - denominations[0], denominations) + makingChange(amount, denominations.slice(1));
  }
}

console.log(makingChange(4, [1,2,3]));