// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

// Time: O(n^2);
// Space: O(1);

function inFlightEntertainment(flightLength, movieLengthsArr) {
  for (var i = 0; i < movieLengthsArr.length; i++) {
    for (var j = i+1; j < movieLengthsArr.length; j++) {
      if (movieLengthsArr[i] + movieLengthsArr[j] === flightLength) {
        return true;
      }
    }
  }
  return false;
}

// Time: O(n);
// Space: O(n);

function inFlightEntertainment(flightLength, movieLengthsArr) {
  var obj = {};
  for (var i = 0; i < movieLengthsArr.length; i++) {
    var flightRemaining = flightLength - movieLengthsArr[i];
    if (obj[flightRemaining]) {
      return true;
    };
    obj[movieLengthsArr[i]] = movieLengthsArr[i];
  }
  return false;
}


var flightLengthTest = 186;
var movieLengthsArr = [35, 100, 86, 20];
// var movieLengthsArr = [40, 100, 51, 20];
console.log(inFlightEntertainment(flightLengthTest, movieLengthsArr))