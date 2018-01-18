
var txt;

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




	noCanvas();
}

