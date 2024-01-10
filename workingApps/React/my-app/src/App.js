
import React from 'react';
import './styles.css';
import {useState} from 'react'
import { useMemo } from 'react'





function App() {
	const[text, setText] = useState('react')
	const[num, setNum] = useState(0)

	function handleTextChange(){
		setText(text +' !')
	}

	function triple(num){
		let number = Number(num)

		return number *3
	}

	let result = useMemo(()=>triple(num),[num])
	
	return (<div>
		<p onClick={handleTextChange}>{text}</p>
		<p onClick={()=> setNum(num + 1)}>{result}</p>
	</div>
	)
}

export default App;