import React from "react";
import { useContext } from 'react';
import { MyContext } from './MyContext';


function Grandson() {
	const name = useContext(MyContext);
	
	return (
		<div>
			<p>I am Grandson {name / 2} </p>
		</div>
	);
}


export default Grandson