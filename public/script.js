

let form   = document.querySelector('form');
let link = document.querySelector('#submitButton');

link.addEventListener('click', function(event) {
    event.preventDefault(); 
	let res = form.submit();
    return res; 
});