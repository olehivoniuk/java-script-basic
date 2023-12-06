export default {
	'/handler/': function({ post }) {
		return Number(post.num1) + Number(post.num2) + Number(post.num3);
	}
}
