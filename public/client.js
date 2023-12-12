
function getArray(str) {

    let regex = /[0-9]/g;
    let matches = str.match(regex); 

    console.log(matches.map(elem => str.indexOf(elem)));
    
}

getArray('hello123world');


