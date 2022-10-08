module.exports = {
	print: (args) => console.log(args),
	patternPosition: (string, pattern) => {
		for (let i = 0; i < string.length; i++) {
			if (pattern[0] === string[i]) {
				return i + 1;
			}
		}
		return -1;
	},
	length: (string) => {
		let count = 0;
		for (let i = 0; ; i++) {
			if (string[i] === undefined) {
				break;
			}
			count++;
		}
		return count;
	},
};
