import React, { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

import ItemList from '../../ItemList/ItemList'




function ItemListConteiner() {
    
    const [productos, setProductos] = useState([])
    const [Loading, setLoading] = useState(true)
  
    useEffect(()=>{
      const db = getFirestore()
      const queryCollection = collection(db,'productos')
      getDocs(queryCollection)
      .then(resp => setProductos(resp.docs.map(prod =>({id:prod.id,...prod.data()}))))
      .catch(err => console.log(err))
      .finally(()=>setLoading(false))
      
  }, [])

  return (
    <div className='row  d-flex justify-content-center'>
        {Loading ? 
        <h2>Cargando...</h2>
        : 
        <ItemList productos={productos}/>
        }
    
                

     

        
    </div>
  )
}

export default ItemListConteiner

//itemlist pasar la parte de producto.map
// item pasar la card de bootstrap     <div>
         //   <Item/>
          //  </div>