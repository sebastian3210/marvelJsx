import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail/ItemDetail'



function ItemDetailConteiner() {

  const {idProduct} = useParams()
  console.log(idProduct)



  return (
    <div>
      <ItemDetail/>
    </div>
  )
}

export default ItemDetailConteiner