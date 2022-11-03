import React, { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

import ItemList from '../../ItemList/ItemList'
import { useParams } from 'react-router-dom'




function ItemListConteiner() {
    
    const [productos, setProductos] = useState([])
    const [Loading, setLoading] = useState(true)

    const {idCategory} = useParams()
    
  
    useEffect(()=>{
      if (idCategory){
        const db = getFirestore()
        const queryCollection = collection(db,'productos')
        const queryFilter = query(queryCollection, where('category', '==', idCategory))
        getDocs(queryFilter)
        .then(resp => setProductos(resp.docs.map(prod =>({id:prod.id,...prod.data()}))))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))

      }
      else{
        const db = getFirestore()
        const queryCollection = collection(db,'productos')
        getDocs(queryCollection)
        .then(resp => setProductos(resp.docs.map(prod =>({id:prod.id,...prod.data()}))))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))

      }

      
  }, [idCategory])

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

