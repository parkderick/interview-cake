// I want to learn some big words so people think I'm smart.

// I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

// Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:

// Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

// Time: O(n);
// Space: O(1);

function findRotationPoint(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i] < temp) {
      return i;
    }
    var temp = words[i];
  }
}

// Time: O(lg n);
// Space: O(1);

function findRotationPoint(words) {
  var floor = 0;
  var ceil = words.length - 1;
  var guess = Math.floor((floor + ceil) / 2);
  
  while (floor < ceil) {
    console.log(floor, ceil, guess)
    guess = Math.floor((floor + ceil) / 2);
    if (words[guess] < words[floor]) {
      ceil = guess;
    } else if (words[guess] > words[floor]) {
      floor = guess;
    } else {
      return guess + 1;
    }
  }
}

var test = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];
console.log(findRotationPoint(test));