const { length, print: p, patternPosition } = require('../Utils');
const { indexing } = require('./indexing');

function deletion(string, position, noOfCharToDelete) {
	let resultString = '';
	for (let i = 0; i < length(string); i++) {
		if (i + 1 === position) {
			i = i + noOfCharToDelete;
		}
		resultString += string[i];
	}
	return resultString;
}

// p(deletion('ABCDEFG', 4, 2));
// p(deletion('ABCDEFG', 2, 4));

function deletionWithChar(string, pattern) {
	let resultString = string;
	while (indexing(resultString, pattern) !== -1) {
		resultString = deletion(resultString, indexing(resultString, pattern), length(pattern));
	}
	return resultString;
}

// p(deletionWithChar('XABYABZ', 'AB'));
// p(deletionWithChar('XAAABBBY', 'AB'));

module.exports = {
	deletion,
	deletionWithChar,
};
