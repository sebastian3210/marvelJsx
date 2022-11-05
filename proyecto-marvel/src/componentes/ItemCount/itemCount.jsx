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
  <>
    <div className='m-3 p-3 g-2 d-flex justify-content-evenly'>
        <button className='m-3' onClick={handleAdd} > +</button>
        <p className='m-3'>{count} </p>
        <button className='m-3' onClick={handleRemove} > -</button>
     </div>
     <ButtonCount handleOnAdd={handleOnAdd}/>
  </>  
  )
}

export default ItemCount