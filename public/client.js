
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

let id = 'JAmjRlfQT8rLTm5tG2m1L';



button.addEventListener('click', function(){

    let res = arr.filter(elem => elem.id !== id);

    console.log(res);
})










