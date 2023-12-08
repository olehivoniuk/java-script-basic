
let  button = document.querySelector('button'); 


let arr = [
	{
		id: 'GYi9GauC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];

button.addEventListener('click', function() {
    let id = 'JAmjRlfQT8rLTm5tG2m1L';
    let prop2 = 'prop2';
    let prop3 = 'prop3';

    let targetElement = arr.find(element => element.id === id);

        if (prop2 in targetElement) {
            targetElement[prop2] += '!';
        } 
        if (prop3 in targetElement) {
            targetElement[prop3] += '!';
        }

        console.log('Updated array:', arr);

    
});









