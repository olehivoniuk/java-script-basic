
let div    = document.querySelector('div');
let button = document.querySelector('#button');


button.addEventListener('click', function() {
	fetch('./ajax1.html').then(
		response => {  if (response.status == 200){
            console.log(response.status);
			return response.text();
        }else{
           return   'Check the address again.'
            
        }}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});










