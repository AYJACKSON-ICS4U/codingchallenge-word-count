// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/unm0BLor8aE

var txt;
var counts = {};
var keys = [];

// Used to load up the file to be searched
function preload() {

  // Load the file into an arrayd
  txt = loadStrings('input.txt');
}

function setup() {

  // Join all the lines together and add a newline character to after each line
  var allwords = txt.join('\n');

  // Create a list of each word
  var tokens = allwords.split(/\W+/);

  // Loop through the number of words in the file
  for (var i = 0; i < tokens.length; i++) {

    // Make the word lowercase
    var word = tokens[i].toLowerCase();

    // If the word does not have any numbers
    if (!/\d+/.test(word)) {

      // Count makes a relation from word to number of that word
      // if the word has not been seen before add it to the count word to number relator
      if (counts[word] === undefined) {

        // Add the word and to the counter and make the number of that word 1
        counts[word] = 1;

        // Keys is a list of the different words
        // add this new word to the list
        keys.push(word);

      // If the word has been seen before
      } else {
        // Increase the current word to number relation by 1 in the counts variable
        counts[word] = counts[word] + 1;
      }
    }
  }

  // Sort the keys by the return value of compare
  // Compare sorts by most amount of that word to least
  keys.sort(compare);

  function compare(a, b) {
    var countA = counts[a];
    var countB = counts[b];
    return countB - countA;
  }

  for (var i = 0; i < keys.length; i++){
    var key = keys[i];
    createDiv(key + ' ' + counts[key]);
  }
}
