// You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.
// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are words and the values are the number of times the words occurred.
// We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. And it'll be easier and cleaner when we want to iterate over our data.
// Think about capitalized words. For example, look at these sentences:
// What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 2. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

// Assume the input will only contain words and standard punctuation.

// Time: O(n);
// Space: O(n);

function wordCloudData(sentence) {
  var words = sentence.split(' ');
  var result = {};
  for (var i = 0; i < words.length; i++) {
    if (words[i].includes('.') || words[i].includes(':') || words[i].includes(',') || words[i].includes('(') || words[i].includes(')')) {
      var string = ''
      var toggle;
      for (var j = 0; j < words[i].length; j++) {
        if (words[i][j] !== '.' && words[i][j] !== ':' && words[i][j] !== ',' && words[i][j] !== '(' && words[i][j] !== ')') {
          string += words[i][j];
        }
      }
      words[i] = string;
    };
    if (result[words[i].toLowerCase()]) {
      result[words[i].toLowerCase()] += 1;
    } else {
      result[words[i].toLowerCase()] = 1;
    }
  }
  return result;
}

// console.log(wordCloudData("After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar."));
console.log(wordCloudData("We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake. The bill came to five dollars."));