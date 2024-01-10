import React from 'react';
import { MyContext } from './MyContext';
import { useState } from 'react';
import Parent from './Parent.js';
import './styles.css';



function App() {
	const[age,setAge] = useState(50)
	return (
		<MyContext.Provider value={age}>
			<Parent />
			<button onClick={()=>setAge(age/2)}>Divide age by 2</button>
		</MyContext.Provider>
	);
}

export default App;

