import React from "react";

function User({ name, surname, age, id, status, checkStatus }) {
  return (
    <div>
      <span> name: {name}</span>
      <span> surname: {surname}</span>
      <span> age: {age}</span>
      <span> status : {status}</span>

      <span> key: {id}</span>
      <span>{status ? 'the user is unblocked' : "user is blocked"}</span>
      <button onClick={() => checkStatus(id)}>Block the user</button>
    </div>
  );
}

export default User;



