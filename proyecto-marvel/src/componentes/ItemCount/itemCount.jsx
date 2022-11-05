import React, { useState } from 'react'
import ButtonCount from '../buttonCount/ButtonCount'
import './ItemCount.css'

function ItemCount({stock, init, onAdd}) {
   
    const[count,setCount] = useState(init)

    const handleAdd = ()=>{
        if (count < stock){
            setCount(count + 1)
        }
        
    }
    
    const handleRemove = ()=>{
        if (count > init){
            setCount(count - 1)
        }
        
    }

    const handleOnAdd = () =>{
        onAdd(count)
    }


  return (
    <div>
        <button onClick={handleAdd} > +</button>
        <p>{count} </p>
        <button onClick={handleRemove} > -</button>
        <ButtonCount handleOnAdd={handleOnAdd}/>

    </div>
  )
}

export default ItemCount