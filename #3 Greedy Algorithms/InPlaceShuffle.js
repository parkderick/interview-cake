// Write a function for doing an in-place ↴ shuffle of an array.

// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

// Time: O(n);
// Space: O(1);

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
};

function inPlaceShuffle(array) {
  for (var i = 0; i < array.length; i++) {
    var secondIndex = getRandom(i, array.length-1);
    if (secondIndex !== i) {
      var temp = array[i];
      array[i] = array[secondIndex];
      array[secondIndex] = temp;
    }
  }
  return array;
}