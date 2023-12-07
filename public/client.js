
let arr = fillArr('x', 5);

function fillArr(val, amount) {
	let arr = [];
	
	for (let i = 1; i <= amount; i++) {
		arr.push(val);
	}
	
	return arr;
}

const x = Array(5).fill("x", 0);
console.log(x)












