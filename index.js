// const target = {};

// const populate = () => {
// 	console.log(target, 'TARGET_OBJECT');
// 	return new Proxy(target, {
// 		get: (obj, prop) => (prop in obj ? obj[prop] : (obj[prop] = populate())),
// 	});
// };

// let univ = populate();

// univ.college.stream.year = 'A+';

// // univ.college.stream = 'Manikandan'
// // univ.college= 'Manikandan'
// // console.log(target)


// function subStrPattern()