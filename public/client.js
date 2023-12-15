

function createHyphenatedSting(num){

  let arr = []

  for ( let i = 1; i <= num; i++ ){
    arr.push(`-${i}`)
    
  }

  return arr.join('')
}

 let res = createHyphenatedSting(5)

 console.log(`${res}-`);

// let num = 5;
// let zerosString = '-0'.repeat(num);
// console.log(`${zerosString}-`);