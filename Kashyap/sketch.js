
var txt;
var counts = {}; //value of object
var keys = []; //stores pairs of unique words
//loads the text file before hand
function preload() {
	//find the text file within the folder
	txt = loadStrings('sample.txt');



}

function setup() {

	//Joins all the words into one long word
	var allwords = txt.join("\n");
	//sperates each token into sperate (splits by all spaces and punctiation)
	var tokens = allwords.split(/\W+/);
	console.log(tokens);
	//loops through words looking for new words
	for (var i =0; i< tokens.length; i++) {
		var word = tokens[i].toLowerCase(); //converts all to lower case
		//doesnt allow numbers
		if (!/\d+/.test(word)) {
			if (counts[word] === undefined) {
				counts[word] = 1;
				keys.push(word);
			} else {
				counts[word] = counts[word] + 1;
			}
		}
	}

  keys.sort(compare); //Sorts the array in alphabetical order
  
  function compare(a, b) {
    var countA = counts[a];
    var countB = counts[b];	//sorts the array in terms of frenquency of word
    return countB - countA;
  }

  for (var i = 0; i < keys.length; i++) { 	//displays the array
  	var key = keys[i];
  	createDiv(key + " " + counts[key]);
  }


  noCanvas();
}

