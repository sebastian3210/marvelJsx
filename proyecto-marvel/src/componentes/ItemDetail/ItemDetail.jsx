import React, { useState } from 'react'
import { useCartContext } from '../../cartContext/cartContext'
import InputCount from '../inputCount/InputCount'
import ItemCount from '../ItemCount/itemCount'

function ItemDetail({productos}) {
  const [isCount, setIsCount]= useState(true)

  const{addItem, cartlist} = useCartContext()
  const onAdd = (amount) =>{
    console.log('onAdd', amount)
    addItem({...productos, amount})
    setIsCount(false)
  }

  console.log(cartlist)


  
  return (
    <div>
      <h2>Book now and we ship it today!!</h2>
        <div className="col-sm-12 mb-2 col-md-4" key={productos.id}> 
         <div className="card">
           <div className="row g-0">
              <div className="col-5 col-sm-4">
                 <img src={productos.img} className="img-fluid" alt="card-horizontal-image" width="100" height="100" />
              </div>
            <div className="col-7 col-sm-8">
              <div className="card-body">
                 <h5 className="card-title">{productos.name} </h5>
                     <p className="card-text"> ARS {productos.price} </p>
                     <p className="card-text"><small className="text-muted">stock: {productos.stock}</small></p>
                     {
                      isCount ?
                      <ItemCount onAdd={onAdd} stock={productos.stock} init={1} />
                      :
                      <InputCount/>

                     }
                     
                     

                     
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default ItemDetail

//