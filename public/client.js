
function convertToUpperCase(str) {

    let result = str.split(' ')
    let arr2 = []; 
    for ( let i = 0; i< result.length; i++){
        let arr1 =  result[i].split('')
         let two = arr1[0].toUpperCase() + arr1.join('').slice(1)
          arr2.push(two)
          

    }
    console.log(arr2.join(' '))
}

convertToUpperCase('aaa bbb ccc')


