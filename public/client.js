
let div    = document.querySelector('div');
let button = document.querySelector('#button');


button.addEventListener('click', function() {
	fetch('/handler/?num=3&num1=6').then(
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










