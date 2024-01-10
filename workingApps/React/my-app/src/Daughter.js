import React from "react";
import { useContext } from "react";
import Grandson from "./Grandson";
import { MyContext } from './MyContext';




function Daughter() {
    const age = useContext(MyContext)
	return (
		<div>
             <p>I am a Daughter {age} years old</p> 

            <Grandson/>
            <Grandson/>
        </div>
	);
}

export default Daughter