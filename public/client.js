let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
	 fetch('/handler/', {
		method: 'POST',
		body: new FormData(this) // передаем ссылку на форму
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
        	);;
});










