import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState('');

  const result = notes.map((note, index) => {
    return <li key={index}>{note}</li>;
  });

  function handleClick() {
    setNotes([...notes, value]); // Add the value to the notes array
    setValue(''); // Clear the input after adding the value
  }

  return (
    <div>
      <button onClick={handleClick}>Add an element</button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <ul>
        {result}
      </ul>
    </div>
  );
}

export default App;
