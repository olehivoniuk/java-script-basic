
let div    = document.querySelector('div');
let button = document.querySelector('#button');


button.addEventListener('click', function() {
	fetch('/handler/?num=1', {
		method: 'post',
		body: 'num1=1&num2=2&num3=3',
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










