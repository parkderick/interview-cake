// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.

// Time: O(n^3);
// Space: O(1);

function highestProductOf3(numbers) {
  var product = 0;
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i+1; j < numbers.length; j++) {
      for (var k = j+1; k < numbers.length; k++) {
        if (numbers[i] * numbers[j] * numbers[k] > product) {
          product = numbers[i] * numbers[j] * numbers[k]
        }
      }
    }
  }
  return product;
}

// Time: O(n);
// Space: O(1);

function highestProductOf3(numbers) {
  var lowest = Math.max(numbers[0], numbers[1]);
  var highest = Math.max(numbers[0], numbers[1]);
  var lowestProductOf2 = numbers[0] * numbers[1];
  var highestProductOf2 = numbers[0] * numbers[1];
  var highestProductOf3 = numbers[0] * numbers[1] * numbers[2];
  for (var i = 2; i < numbers.length; i++) {
    var current = numbers[i];
    lowestProductOf2 = Math.min(lowestProductOf2, lowest * current, highest * current);
    highestProductOf2 = Math.max(highestProductOf2, lowest * current, highest * current);
    highestProductOf3 = Math.max(highestProductOf3, current * highestProductOf2, current * lowestProductOf2);
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }
  return highestProductOf3;
}

const integers = [-10, -10, 1, 3, 2];
console.log(highestProductOf3(integers));