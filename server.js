export default {
	'/handler/': function(data) {
		console.log(data.get); 

		let email = 'oscar@com'; 
		if(email == data.get.test1){
			return "Well"
		}else{ 
			return "The email is incorrect, try again"
		}
		
	}
}
