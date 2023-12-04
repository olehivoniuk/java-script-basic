export default {
	'/handler/': function(data) {
		console.log(data.get);

		let date = new Date(); 
if (data.get.num1 == (date.getFullYear()).toString()
   && data.get.num2 == (date.getMonth()+1).toString() 
    && data.get.num3 == (date.getDate()).toString()){
	return 'the date is correct ';
} else{
	  return ' the date is incorrect '
   }
  }
}