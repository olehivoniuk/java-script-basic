// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }


// function findObjSum(obj){

//   let sum = 0; 

//   for ( let key in obj){
//     let subObj = obj[key]
//       for ( let key1 in subObj){
//         let subSubObj = obj[key][key1]
//           for ( let key2 in subSubObj){
//             let value = subSubObj[key2]

//             sum += value
//           }

//     }
//   }

//   return sum



// }

//  let res = findObjSum(obj); 

//  console.log(res);

let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
};

function sumObject(obj) {
	let sum = 0;

	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			sum += sumObject(obj[key]);
		} else {
			sum += obj[key];
		}
	}

	return sum;
}

let totalSum = sumObject(obj);
console.log(totalSum);