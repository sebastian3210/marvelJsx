
import { getDoc, getFirestore, doc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail/ItemDetail'



function ItemDetailConteiner() {
  const [productos, setProductos] = useState([])
  const [Loading, setLoading] = useState(true)
  const {idProduct} = useParams()
  
  useEffect(()=>{
    const db = getFirestore()
    const queryDoc = doc(db,'productos', idProduct)
    getDoc(queryDoc)
    .then(resp =>setProductos({id:resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [] )



  return (
    <div>
      <ItemDetail productos={productos} />
    </div>
  )
}

export default ItemDetailConteiner