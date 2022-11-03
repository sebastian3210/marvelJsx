
import NavBar from './componentes/NavBar/NavBar'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import ItemListConteiner from './componentes/Pages/ItemListConteiner/ItemListConteiner'
import Title from './componentes/Title/Title'
import ItemDetailConteiner from './componentes/Pages/ItemDetailConteiner/ItemDetailConteiner'
import CartPage from './componentes/Pages/CartPages/CartPage'




function App() {

  return (
    <BrowserRouter>
       <NavBar/>        
       <Title title={'Clearence week Marvel'} />

       <Routes>
         <Route path='/' element={ <ItemListConteiner/> } />
         <Route path='/category/:idCategory' element={ <ItemListConteiner/> } />
         <Route path='/detail/:idProduct' element={ <ItemDetailConteiner/> } />
         <Route path='/cart' element={ <CartPage/> } />
         <Route path='*' element={<Navigate to='/'/>}/>         
       </Routes>

    </BrowserRouter>
  )
}

export default App
