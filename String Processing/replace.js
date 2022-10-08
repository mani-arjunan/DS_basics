const { print, length } = require('../Utils');
const { deletion, deletionWithChar } = require('./deletion');
const { indexing } = require('./indexing');

deletion;

function replace(string, existingPattern, replaceText, type) {
	let cloneString = string;

	function replaceSingle(string, existingPattern) {
		let resultString = '';
		let indexOfExistingPattern = indexing(string, existingPattern) - 1;
		string = deletion(string, indexing(string, existingPattern), length(existingPattern));

		for (let i = 0; i < length(string); i++) {
			if (i === indexOfExistingPattern) {
				resultString += replaceText;
			}
			resultString += string[i];
		}
        
		return resultString;
	}

	if (type == 'ALL') {
		while (indexing(cloneString, existingPattern) !== -1) {
			cloneString = replaceSingle(cloneString, existingPattern);
		}
	} else if (type === 'ONE') {
		cloneString = replaceSingle(cloneString, existingPattern);
	}

	return cloneString;
}

print(replace('XABYABZ', 'AB', 'C', 'ALL'));
print(replace('XABYABZ', 'BA', 'C', 'ALL'));
