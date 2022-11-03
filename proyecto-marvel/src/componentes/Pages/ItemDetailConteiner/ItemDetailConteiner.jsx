import React from 'react'
import React, { useEffect } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

function ItemDetailConteiner() {


    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db,'productos')
        getDocs(queryCollection)
        .then(resp => setProductos(resp.docs.map(prod =>({id:prod.id,...prod.data()}))))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
        
    }, [])
    


  return (
    <div>ItemDetailConteiner</div>
  )
}

export default ItemDetailConteiner