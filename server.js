export default {
	'/handler/': function({post}) {
	let num = Number(post.num1)+ Number(post.num2) + Number(post.num3) + Number(post.num4) + Number(post.num5)
	 let avr = num / 5;
	 console.log(avr);

		return avr; 
	}
}