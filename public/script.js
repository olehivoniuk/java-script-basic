let button = document.querySelector('button'); 
let form = document.querySelector('form');



button.addEventListener('click', function(){
    let formData = new FormData(form);
formData.set('test4', '050505050')
formData.delete('test2')
for (let value of formData.values()) {
	console.log(value);
}
console.log(Array.from(formData));

})



// let form = document.querySelector('form');
// let input = document.getElementById('test')
// // // let link = document.querySelector('#submitButton');

// // // link.addEventListener('click', function(event) {
// // //     event.preventDefault(); 
// // // 	let res = form.submit();
// // //     return res; 
// // // });

// form.addEventListener('submit', function(event) {
	
//     let email = 'oscar@com'; 
//     if(email == input.value ){
//         return "Well"
//     }else{ 
//         event.preventDefault();
//         console.log("The email is incorrect, try again"); 
//     }
    
// }); 