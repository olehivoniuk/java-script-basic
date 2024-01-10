import React, { useState } from 'react';
import './styles.css'

function App() {
  const [deed, setDeed] = useState('');
  const [value, setValue] = useState([]);
  const [ checked, setChecked] = useState(false)


  function addDeed(event) {
    setDeed(event.target.value);
  }

  function addToDo() {
    setValue([...value, deed]);
    setDeed(''); // Clear the input after adding a deed
  }

  function deleteData(index) {
	const updatedList = [...value];
	updatedList.splice(index, 1);
	setValue(updatedList);
  }

  function checkboxStatus(){

	if(checked)
	setChecked(!checked)
  }


  const result = value.map((item, index) => (<div>
	   
    	<li key={index} >
		<input type='checkbox' checked={checked[index]} onChange={checkboxStatus} 
		style={{ textDecoration: checked ? 'line-through' : 'none' }}
		/>
        {item}
		
		<button onClick={() => deleteData(index)}>Delete</button>
		</li>
		
  </div>

  ))

  return (
    <>
      <p>Checklist project</p>
      <input value={deed} onChange={addDeed} />
      <button onClick={addToDo}>add to list</button>
      <ul >
        {result}
      </ul>
    </>
  );
}

export default App;

// style={{ textDecoration: checked[index] ? 'line-through' : 'none' }}
