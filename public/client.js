
let div    = document.querySelector('div');
let button = document.querySelector('#button');


button.addEventListener('click', function() {
	fetch('./data.json', {headers: {
        "Content-Type": 'text/plain',
    }}).then(response => {
		return response.json();
       
	}).then(data => {
		console.log(data);

      
        for (let dataCell of data){
            const li = document.createElement('li'); 
            li.textContent = dataCell; 
            document.body.appendChild(li); 

        }
        return data; 
	});
});










