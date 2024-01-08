import React from "react";

function User({ name, surname, age, id,isEdit, toggleMode, editUser }) {
  return (
    <div>
      name: {isEdit ? <input value={name}  onChange ={event =>editUser(id,"name", event)}/> : <span>{name}</span>}

      surname: {isEdit ? <input value={surname} onChange ={event => editUser(id,"surname", event)}/> : <span>{surname}</span>}

      age: {isEdit ? <input value={age} onChange ={event => editUser(id,"age", event)} /> : <span>{age}</span>}  

      <button onClick={()=>toggleMode(id)}>{isEdit ? 'save': 'edit'}</button>


    </div>
  );
}

export default User;



