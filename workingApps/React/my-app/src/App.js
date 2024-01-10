
import React from 'react';
import './styles.css';
import {useState} from 'react'
import Text from './Text';






function App() {
	const [name, setName] = useState('');


	return (
		<div>
			<label>
				name:
				<input value={name} onChange={(e) => setName(e.target.value)} />
			</label>
			<br />
			
			<Text />
		</div>
	);

}

export default App;