import React from "react";
import { useState } from "react";
import User from "./User";


const initUsers = [
  { name: 'user1', surname: 'surn1', age: 30, isEdit: false, id: 0 },
  { name: 'user2', surname: 'surn2', age: 31, isEdit: false, id: 1 },
  { name: 'user3', surname: 'surn3', age: 32, isEdit: false, id: 2 },
];


function Users (){
    const [users, setUsers] = useState(initUsers)

    function toggleMode(index){
        setUsers( users.map((user) =>{
            if(user.id === index){
               user.isEdit = !user.isEdit
            }

            return user; 
        })
        )
    }
    
    function editUser(id, field, event) {
        setUsers(users.map(user => {
            if (user.id === id) {
                user[field] = event.target.value;
            }
            
            return user;
        }));
    }


    let result = users.map((elem, index) =>{
        return <User 
         key={index}
         name ={elem.name}
         surname={elem.surname}
         age ={elem.age}
         isEdit ={elem.isEdit}
         id ={index}
         toggleMode={toggleMode}
		editUser={editUser}
         />
    })


    return <div>
        {result}
    </div>


}


export default Users