function createArray(){

  let arr = []

for(let i = 0; i <= 4; i++){
   arr[i] = []
  for ( let j = 1; j <= 3; j++){
    arr[i].push(j)

  }
}
return arr;

}

 let res  = createArray(); 

 console.log(res);