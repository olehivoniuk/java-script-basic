
let div    = document.querySelector('div');
let button = document.querySelector('#button');


button.addEventListener('click', function() {
    let searchParams = new URLSearchParams();
	
	searchParams.set('num1', '1');
	searchParams.set('num2', '2');
    searchParams.set('num3', '3');
	fetch('/handler/', {
		method: 'post',
		body: searchParams,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
    }).then(
		response => {
            console.log(response)
			return response.text();
		}
	).then(
		text => {
			console.log(text);
            let p = document.createElement('p');
            p.textContent = text;
            document.body.appendChild(p)
		}
	);
});










