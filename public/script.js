

let form = document.querySelector('form');
let input = document.getElementById('test')
// // let link = document.querySelector('#submitButton');

// // link.addEventListener('click', function(event) {
// //     event.preventDefault(); 
// // 	let res = form.submit();
// //     return res; 
// // });

form.addEventListener('submit', function(event) {
	
    let email = 'oscar@com'; 
    if(email == input.value ){
        return "Well"
    }else{ 
        event.preventDefault();
        console.log("The email is incorrect, try again"); 
    }
    
}); 