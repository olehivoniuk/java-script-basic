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
	}
];

let id = 'IWSpfBPSV3SXgRF87uO74';
let prop = 'prop1';
let value = '!!!';

let res = arr.map(elem => {
	if (elem.id === id) {
		return Object.assign({}, elem, { [prop]: value });
	} else {
		return elem;
	}
});

console.log(res);









