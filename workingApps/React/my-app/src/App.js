
import React from 'react';
import './styles.css';
import {useRef} from 'react'



function App() {

	const ref = useRef(null)

	function handleClick() {
		ref.current.focus();
		ref.current.value = ''
	}
	
	return (
		<div>
			<input ref={ref} />
			<button onClick={handleClick}>focus</button>
		</div>
	);
}

export default App;