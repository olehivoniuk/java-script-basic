function deleteElem(arr, elem){

    let index = arr.indexOf(elem); 
     arr.splice(index, 1); 

    console.log(arr);


}
deleteElem([1, 2, 3, 4, 5, 6], 4)



