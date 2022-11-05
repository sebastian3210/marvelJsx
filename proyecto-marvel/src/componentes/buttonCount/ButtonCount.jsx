import React from 'react'
import './buttonCount.css'

function ButtonCount({handleOnAdd}) {
 


  return (
    <div>
      <button className="fancy"  href="#" onClick={handleOnAdd}  >
        <span className="top-key"></span>
        <span className="text">Add to cart</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>

    </div>
  )
}

export default ButtonCount