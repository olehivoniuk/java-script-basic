let data = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];

 
function getTotal(obj){

  let sum = 0;

  for ( let key in obj){
    let value = obj[key]
    for ( let key1 in value){
      let value1 = value[key1]
      for (let num of value1){
        sum += num
      }
    }
  }

  return sum;

 

}

 let res = getTotal(data); 

 console.log(res)