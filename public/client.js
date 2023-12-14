function getLastEvenNumber(num) {

  let arr = num.toString().split('').reverse()
  console.log(arr)

  let res = arr.find(elem => {
    if (elem % 2 == 0 ){
      return elem
    }
  })
  console.log( res);
 
}

getLastEvenNumber(4523468686969602)
