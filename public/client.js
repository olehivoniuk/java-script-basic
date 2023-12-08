let ul = document.querySelector('ul');

let table = document.createElement('table'); 
document.body.appendChild(table); 


for (let i = 1; i <= 100; i++) {
	let tr = document.createElement('tr');
	table.appendChild(tr);
    for ( let k = 1; k <=100; k++){
        let td = document.createElement('td')
        td.textContent = k ; 
        tr.appendChild(td)
    }
}

table.addEventListener('click', function(event) {
	let td = event.target.closest('td');
	
	if (td) {
		td.style.color = 'red '
	}
});








