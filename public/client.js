
function getArr(arr){
 
    console.log(arr.filter( elem => elem.endsWith('.html')?elem : null))

}

getArr(['1.456.html', 'http://2.125', '3.32.html', 'http://4.1', '5.34'])




