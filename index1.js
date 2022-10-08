// function subStrPattern(str, patt) {
// 	let flag = 1;
// 	for (let i = 0; i < str.length; i++) {
// 		for (let j = 0; j < patt.length; j++) {
// 			if (str[i + j] !== patt[j]) {
// 				flag = 0;
// 				break;
// 			}
// 		}
// 		if (flag === 1) {
// 			return i + 1;
// 		} else {
// 			flag = 1;
// 		}
// 	}
// 	return -1;
// }

// const str = 'HIS FATHER IS THE PROFESSOR';

// console.log(subStrPattern(str, 'THE'));
// console.log(subStrPattern(str, 'THEN'));
// console.log(subStrPattern(str, 'THE '));

function getResult() {
	const array = [100, 272, 927, 135, 530, 279, 432, 928, 593];
	const number = Math.ceil(Math.max.apply(null, array) / 100) * 100;
	console.log(Math.max.apply(null, array) / 100);
	console.log(number);
	return number + (number * 20) / 100;
}

console.log(getResult())