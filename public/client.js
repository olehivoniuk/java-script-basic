
function findTotal(str){

    let arr = str.split(',').join(''); 
    let arr1 = arr.split('')
    console.log(arr1.reduce((sum,elem) => sum + Number(elem), 0));
}

findTotal('12,34,56')