export default {
	'/handler/': function({ post }) {
		console.log(post)
		return Number(post.test1) + Number(post.test2) + Number(post.test3);
	}
}
