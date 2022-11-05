import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { useCartContext } from '../../../cartContext/cartContext'
import './CartPage.css'

function CartPage() {

  const  [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email:''

})
const handleInputChange = (e) => {        
  setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
  })
}


  const {cartlist, emptyCart, priceTotaly, removeItem}= useCartContext()


  const buyOrder = async (e)=>{
    e.preventDefault()
    const order = {}
    
    order.buyer= {
        name: dataForm.name,
        phone: dataForm.phone,
        email: dataForm.email
    }

    order.items= cartlist.map(prod => {
        const {id, name: title, price} = prod
        return {id, title, price}
    })

    order.total= priceTotaly()

    const db = getFirestore()
    const orders = collection(db, 'orders')
    addDoc(orders, order) 
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() => emptyCart())
}


  return (
<div>

 <div>
      <h2>Cart</h2>
        <ul>
          {cartlist.map(productos=> <li key={productos.id} >{productos.name} stock :{productos.stock} ARS {productos.price} Amount: {productos.amount} <button>Remove</button> </li>)}
        </ul>
       <h3>Price Totaly : {priceTotaly()} </h3> 
 </div>
 <div className="input-group row">
    <label className="label col-3 m-3 p-3">Email address</label>
    <input required=''  name="email" id="email" className="input col-3 p-3 m-3" type="email" value={dataForm.email} onChange={handleInputChange}/>
 </div>
 <div className="input-group row">
    <label className="label col-3 m-3 p-3">Name</label>
    <input required='' pattern='[a-zA-Z]+' name="name" id="name" className="input col-3 p-3 m-3" type="name" value={dataForm.name} onChange={handleInputChange}/>
 </div>
 <div className="input-group row">
    <label className="label col-3 m-3 p-3">Phone</label>
    <input required='' pattern='[0-9]+' name="phone" id="Phone" className="input col-3 p-3 m-3" type="phone" value={dataForm.phone} onChange={handleInputChange}/>
 </div>

 <div className='row  d-flex justify-content-evenly'>
   <button className="fancy col-3 "  href="#" type='submit' onClick={emptyCart} >
          <span className="top-key"></span>
          <span className="text">Empty Cart</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
  </button>
  <button className="fancy col-3 "  href="#" onClick={buyOrder}>
          <span className="top-key"></span>
          <span className="text">Buy Order</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
  </button>
 </div>


  
</div>
  )
}

export default CartPage