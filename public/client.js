
let div    = document.querySelector('div');
let button = document.querySelector('#button');


button.addEventListener('click', function() {
	fetch('./ajax1.html').then(
		response => {  if (response.ok){
            console.log(response.headers.get('Content-Length'))
			return response.text();
        } else {
				throw new Error('bad response status');
			}     
        }
	).then(
		text => {
			div.innerHTML = text;
		}
	).catch(
       error  => {alert(error + ' ' + 'Network error')}
    );
});










