
function getArray(arr) {

    
     let res =  arr.map(elem => Number(elem.toString().split('').reverse().join('')) )
    
      console.log(res)
}

console.log(getArray([123, 456, 789]));


