import _ from 'lodash';
import * as math from './math.js'

let button = document.createElement('button'); 
button.textContent = "show the days of the week and months"
document.body.appendChild(button); 

let ul = document.createElement('ul'); 



button.addEventListener('click', function(){
    Promise.all([
        import('./test.js'),
        import('./months.js')
]).then(( [days,months]) => {
        let res1 = days.getDays(); 
        for ( let day of res1){
            const li = document.createElement('li'); 
            li.textContent = day;
            ul.appendChild(li)
        }
        let res2 = months.getMonths()
        for ( let month of res2){
            const li = document.createElement('li'); 
            li.textContent = month;
            ul.appendChild(li)
        }
        
    })
   
    document.body.appendChild(ul)
 
})


let res  = math.square(2) + math.cube(3);
console.log(res);



