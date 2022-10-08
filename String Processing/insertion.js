const { print: p } = require('../Utils');

function insert(string, position, pattern) {
	let resultString = '';
	for (let i = 0; i < string.length; i++) {
		if (i + 1 === position) {
			for (let j = 0; j < pattern.length; j++) {
				resultString += pattern[j];
			}
			resultString += string[i];
		} else {
			resultString += string[i];
		}
	}
	return resultString;
}

p(insert('ABCDEFG', 3, 'XYZ'));
p(insert('ABCDEFG', 6, 'XYZ'));
