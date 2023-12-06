export default {
	'/handler/': function({get}) {
		return Number(get.num) + Number(get.num1);
	}
}
