

function findTheSumOfElements(obj){

  let sum = 0; 

  for ( let key in obj){
    let subObj = obj[key]; 

    for ( let key in  subObj){
      let value = subObj[key]

      sum += value

    }
  }

  return sum

 
}

   let res  = findTheSumOfElements( {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
})
 
console.log(res);
