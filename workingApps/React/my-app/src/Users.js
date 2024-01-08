import React from "react";
import { useState } from "react";
import User from "./User";


const initUsers = [
  { name: 'user1', surname: 'surn1', age: 30, banned: false, id: 0 },
  { name: 'user2', surname: 'surn2', age: 31, banned: false, id: 1 },
  { name: 'user3', surname: 'surn3', age: 32, banned: false, id: 2 },
];


function Users (){
    const [users, setUsers] = useState(initUsers)

    function checkStatus(index){
        setUsers( users.map((user) =>{
            if(user.id === index){
               user.banned = true
            }

            return user; 
        })

        )
    }
    
    let result = users.map((elem, index) =>{
        return <User 
         key={index}
         name ={elem.name}
         surname={elem.surname}
         age ={elem.age}
         status ={elem.banned}

         id ={index}
         checkStatus = {checkStatus}
         />
    })


    return <div>
        {result}
    </div>


}


export default Users