// You created a game that is more popular than Angry Birds.

// Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(nlgn) time.

// We’re defining nn as the number of unsortedScores because we’re expecting the number of players to keep climbing.

// And, we'll treat highestPossibleScore as a constant instead of factoring it into our big O time and space costs because the highest possible score isn’t going to change. Even if we do redesign the game a little, the scores will stay around the same order of magnitude.

// Time: O(n);
// Space: O(n);

function topScores(nn, highestScore) {
  var scores = {};
  for (var i = 0; i < nn.length; i++) {
    scores[nn[i]] !== undefined ? scores[nn[i]] = scores[nn[i]] + 1 : scores[nn[i]] = 1;
  }
  var result = [];
  for (var j = highestScore; j >= 0; j--) {
    if (scores[j] !== undefined) {
      for (var k = scores[j]; k > 0; k--) {
        result.push(j);
      }
    }
  }
  return result;
}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(topScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
// returns [91, 89, 65, 53, 41, 37]
