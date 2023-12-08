
function getArr(arr){
 
    console.log(arr.filter( elem => elem.startsWith('http://')?elem : null))

}

getArr(['1.456', 'http://2.125', '3.32', 'http://4.1', '5.34'])




