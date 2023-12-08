let  button = document.querySelector('button'); 

let arr = [1, 2, 3, 4, 5];
let ind = 2;

button.addEventListener('click', function(){
    let res = [...arr.slice(0,ind), "!", ...arr.slice(ind)]
    console.log(res);
})







