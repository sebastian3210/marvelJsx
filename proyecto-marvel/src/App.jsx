
import NavBar from './componentes/NavBar/NavBar'
import './App.css'

import ItemListConteiner from './componentes/Pages/ItemListConteiner/ItemListConteiner'
import Title from './componentes/Title/Title'




function App() {

  return (
    <div className="App">

       <NavBar/>
       <Title title={'Clearence week Marvel'} />
       <ItemListConteiner/>

    </div>
  )
}

export default App
