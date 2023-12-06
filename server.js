export default {
	'/handler/': function({ body }) {
	

		let arr = JSON.parse(body); 

		 let res = arr.reduce((sum,elem) => sum + elem,0); 
		 console.log(res);
		 return res


	}
}
