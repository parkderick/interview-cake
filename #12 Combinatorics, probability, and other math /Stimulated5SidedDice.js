// You have a function rand7() that generates a random integer from 1 to 7. Use it to write a function rand5() that generates a random integer from 1 to 5.

// rand7() returns each integer with equal probability. rand5() must also return each integer with equal probability.

Time: O(Infinity)
Space: O(1)

function rand5() {
  var result = 7;
  while (result > 5) {
    result = rand7();
  } 
  return result;
}