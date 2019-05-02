
/*
nGrams logic
	Check if the input is undefined
	Strip punctuation
	Split sentence up into words
	Get number of words in the string
	Check if the input has only one word
	Loop through and create all sequences
		- Concatenate a word
		- Add a word to a result array
	Return a result array
*/

module.exports = {
	nGrams: (sentence) => {
		if (!sentence) return [];
		let res = [];
		sentence = sentence.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
		let words = sentence.split(/\W+/);
		let numOfWords = words.length - 1;
		if (words.length === 1) {
			res.push(words[numOfWords]);
			return res;
		}
		words.forEach((word, i) => {
			let seq = "";
			for (let j = i; j <= numOfWords; j++) {
				seq = seq.concat(`${words[j]} `);
				res.push(seq);
			}
		});
		return res;
	}
}

