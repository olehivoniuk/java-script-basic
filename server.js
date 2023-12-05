export default {
	'/handler/': function({get}) {
		let arr = [
			'user1', 'user2', 'user3'
		];
		if  (arr[Number(get.key )]){
			return arr[Number(get.key )]
		} else{
			return 'check querry key'
		}
	}
}