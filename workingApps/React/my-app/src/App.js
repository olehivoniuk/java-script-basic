import React, { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('Oscar');

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  function changeName() {
    setName('Ivan');
  }

  return (
    <div>
      <h1>React App</h1>
      <button onClick={changeName}>change</button>
    </div>
  );
}

export default App;
