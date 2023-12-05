
let div    = document.querySelector('div');
let button = document.querySelector('#button');


button.addEventListener('click', function() {
	fetch('./ajax1.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);

    button.addEventListener('click', function() {
        fetch('./ajax2.html').then(
            response => {
                return response.text();
            }
        ).then(
            text => {
                div.innerHTML = text;
            }
        );
        button.addEventListener('click', function() {
            fetch('./ajax3.html').then(
                response => {
                    return response.text();
                }
            ).then(
                text => {
                    div.innerHTML = text;
                }
            );
        })
    })})










