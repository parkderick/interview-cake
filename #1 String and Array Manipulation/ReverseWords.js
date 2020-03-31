// You're working on a secret team solving coded transmissions.
// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.
// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

// Time: O(n);
// Space: O(1);

function reverseWords(message) {
  message.reverse();
  var currentWord = 0;
  for (var i = 0, j; i < message.length; i++) {
    if (message[i] === ' ' || i === message.length - 1) {
      message[i] === ' ' ? j = i - 1 : j = i
      while (currentWord < j) {
        console.log(message, currentWord, j)
        var temp = message[currentWord];
        message[currentWord] = message[j];
        message[j] = temp;
        j--;
        currentWord++;
      }
      currentWord = i + 1
    }
  }
  return message;
}

const test = [ 'c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l' ];
console.log(reverseWords(test));

// console.log(message.join(''));
// Prints: 'steal pound cake'