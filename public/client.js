function getTotalOfPairs(num) {

  let arr = num.toString().split('');

   let result = [];

    for (let i = 0; i < arr.length; i += 2) {
        let pair = arr.slice(i, i + 2);
        result.push(parseInt(pair.join('')));
    }

  console.log(result.reduce((sum,elem) => sum + elem,0))
 
}

getTotalOfPairs(123456)
