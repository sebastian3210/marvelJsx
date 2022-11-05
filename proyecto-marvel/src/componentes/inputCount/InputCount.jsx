import React from 'react'
import { Link } from 'react-router-dom'
import './InputoCount.css'

function InputCount() {



  return (
    <div className='row g-30 d-flex justify-content-start'>
      <Link to = '/cart' className='col-6'>
      <button className="fancy p-3" onClick={()=>console.log('go to cart')} href="#">
        <span className="top-key"></span>
        <span className="text">Go to cart</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
      </Link>
      <Link to ='/' className='col-6'>
        <button className="fancy p-3" onClick={()=>console.log('go to home')} href="#">
          <span className="top-key"></span>
          <span className="text">Keep buying</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>

      </Link>


    </div>
  )
}

export default InputCount