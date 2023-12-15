

function getNumbers(num){

  

  for (let i = 10; i < num; i++ ){
  if (i.toString().split('')[0] %2 == 0){
    console.log(i);
  }

  }
}

getNumbers(1000)
