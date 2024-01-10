
import React from 'react';
import './styles.css';
import {useState} from 'react'
import { useCallback } from 'react';
import Products from './Products';


function App() {
	const[text, setText] = useState('text'); 
	const[products, setProducts ] = useState([])

	const addProduct = useCallback(() =>{
       setProducts(()=> [...products, "orange"])
	}, [products] ) 


	return <>

	<p onClick={()=> setText(text + "!")}>{text}</p>
	<Products  products={products} addProduct={addProduct}/>
	
	</>

}

export default App;