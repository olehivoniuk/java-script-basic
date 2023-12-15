
let sentence = "Any answers dadded sas agreeable as sabove sanswers, fadmirable gas angelic advice, altogether acceptable at fall amicable assemblies, are alright.";

function getArrayWithA(str){

  let arr = str.trim().split(' '); 
  

  let arr3 =  arr.filter(element => { if (element.split('')[0] == 'a'){

     return  element

  }})
  console.log(arr3);
}

getArrayWithA(sentence)