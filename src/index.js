import _ from 'lodash';

let button = document.createElement('button'); 
button.textContent = "show the days of the week"
document.body.appendChild(button); 

let ul = document.createElement('ul'); 



button.addEventListener('click', function(){
    import('./test.js').then(mod => {
        let res1 = mod.getDays(); 
        for ( let day of res1){
            const li = document.createElement('li'); 
            li.textContent = day;
            ul.appendChild(li)
        }
        
    })
   
    document.body.appendChild(ul)
 
})

