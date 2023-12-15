function sortInnerArrays(num){


  for ( let i = 10; i<= num; i++){
       let loop = i.toString().split('')

      if (loop[loop.length-2] %2 ==0 && loop[loop.length-2] !=0){
        console.log(loop.join(''))
      }
  }


   
}

 sortInnerArrays(1000)


