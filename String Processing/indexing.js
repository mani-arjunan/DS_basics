const { print: p } = require('../Utils');

const text = 'HIS FATHER IS THE PROFESSOR';
const pattern1 = 'THE';
const pattern2 = 'THEN';
const pattern3 = 'FESS';

function indexing(text, pattern) {
	let flag = true;
	for (let i = 0; i < text.length; i++) {
		for (let j = 0; j < pattern.length; j++) {
			if (pattern[j] !== text[i + j]) {
				flag = false;
				break;
			}
		}
		if (flag) {
			return i + 1;
		}
		flag = true;
	}
	return -1;
}

// p(indexing(text, pattern1));
// p(indexing(text, pattern2));
// p(indexing(text, pattern3));

module.exports = {
	indexing,
};
