import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../../cartContext/cartContext'
import ButtonCount from '../buttonCount/ButtonCount'
import InputCount from '../inputCount/InputCount'

function Interchangeability() {



  const [inputType, setInputType] = useState('button')



  const handleInter = ()=>{
    setInputType('input')    
  }


  return (
    <div>
      {
        inputType === 'button' ?
        <ButtonCount handleInter={handleInter}  />
        :
        <InputCount/>
      }

    </div>
  )
}

export default Interchangeability