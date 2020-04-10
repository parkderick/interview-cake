// Find a duplicate, Space Edition™.

// We have an array of integers, where:

// The integers are in the range 1..n
// The array has a length of n+1
// It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

// Write a function which finds an integer that appears more than once in our array. (If there are multiple duplicates, you only need to find one of them.)

// We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM. So we need to optimize for space!

// Time: O(n^2);
// Space: O(1);

function findRepeatSpace(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i+1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
}

// Time: O(nlgn);
// Space: O(1);

function findRepeatSpace(array) {
  array.sort();
  var previous = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] === previous) {
      return array[i]
    }
    previous = array[i]
  }
}