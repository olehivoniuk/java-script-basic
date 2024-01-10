import React from "react";
import {memo} from 'react'



const Products = memo(function Products({products, addProduct}){
    console.log('products render')

    let result = products.map((product, index)=>{
        return <li key={index}>{product}</li>
    })


    return <div>
        <button onClick={addProduct}>Add new product</button>
        <ul>
            {result}
        </ul>
    </div>
})


export default Products; 