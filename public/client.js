
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

let newElem = {
	id: 'GMNCZnFT4rbBP6cirA0Ha',
	prop1: 'value41',
	prop2: 'value42',
	prop3: 'value43',
};

function getId(length = 16) {
	let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	let res = '';
	
	for (let i = 0; i < length; i++) {
		res += chars[Math.floor(Math.random() * chars.length)];
	}
	
	return res;
}


button.addEventListener('click', function(){
    let copy = Object.assign([], arr);
copy.push(newElem);

for ( let i = 0 ; i < copy.length; i++){
    copy[i].id = getId()

}
let res = copy;
console.log(res);
})










