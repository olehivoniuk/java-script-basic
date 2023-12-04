export default {
	'/handler/': function(data) {
		console.log(data.post);
		let login = 'oleh91'; 
		let password = 'oscar'

		if(data.post.test1 == login && data.post.test2 == password){
			return 'you have accsees to the site data'
		}else{
			return 'password is incorrect'
		}
	}
}