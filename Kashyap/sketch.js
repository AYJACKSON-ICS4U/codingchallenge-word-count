
var txt;
var counts = {}; //value of object

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
		var word = tokens[i];
		//doesnt allow numbers
		if(!/\d+/.test(word)){
			if (counts[word] === undefined) {
				counts[words] = 1; 
			} else {
				counts[word]+= 1;
			}
		}
	}




	noCanvas();
}

