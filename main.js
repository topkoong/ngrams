const { addSection, newLine } = require('./utils/utils');

function nGrams(sentence) {
    // If the input is undefined
    if(!sentence) return [];
    let res = [];
    // Strip punctuation
    sentence = sentence.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "");
	// Split sentence up into words
    let words = sentence.split(/\W+/);
	// Get number of words in the string
	let numOfWords = words.length - 1;
	// If the input has only one word
	if (words.length === 1) {
		res.push(words[numOfWords]);
		return res;
	}
	// Loop through and create all sequences
	for (let i = 0; i <= numOfWords; i++) {
		let seq = "";
		for (let j = i; j <= numOfWords; j++) {
			// Concatenate a word
			seq += words[j] + " ";
			// Add a word to a result array
			res.push(seq);
		}
	}
	return res;
}

function unitTesting() {
	console.log('UNIT TESTING\n');
	addSection();
	console.log(`EMPTY STRING: '' \n`);
	console.log(nGrams(''));
	newLine();
	addSection();
	console.log(`ONE WORD: 'test.'\n`);
	console.log(nGrams('test.'));
	newLine();
	console.log(`ONE WORD WITH PUNCTUATION: 't@est.#{}' \n`);
	addSection();
	console.log(nGrams('t@est.#{}'));
	newLine();
	console.log('Test cases for even and odd words including punctuation\n');
	addSection();
	console.log(`'Show me the code.' \n`);
	console.log(nGrams("Show me the code."));
	newLine();
	addSection();
	console.log(`'I love JavaScript.' \n`);
	console.log(nGrams("I love JavaScript."));
	newLine();
	addSection();
	console.log(`'Which coffee is the healthiest?' \n`);
	console.log(nGrams("Which coffee is the healthiest?"));
}

unitTesting();