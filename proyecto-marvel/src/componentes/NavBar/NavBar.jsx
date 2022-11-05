import { Link } from "react-router-dom"
import { useCartContext } from "../../cartContext/cartContext"
import logo from "../img/logo.png"
import shopCart from '../img/shopping-cart.png'
import './NavBar.css'


const NavBar = (props) => {
  const {amountTotaly} = useCartContext()
  return (
<nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  <div className="p-2">
    <img src={logo} alt="logo" width="80" height="80"/>
  </div>  
      <div className="container-fluid">
          <Link to='/' className="navbar-brand" href="#">Inicio</Link>
        <div className="collapse navbar-collapse show" id="navbarDark">
           <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <Link to='/category/t-shirt' className="nav-link" aria-current="page" href="#">T-Shirt</Link>
            </li>
            <li className="nav-item">
              <Link to='/category/jacket' className="nav-link" href="#">Jacket</Link>
            </li>
            <li className="nav-item">
              <Link to='/category/cap' className="nav-link" href="#">Cap</Link>
            </li>
          </ul>
          <div className="cart d-flex">

             {amountTotaly() !== 0 && amountTotaly()}

             <Link to='/cart'><img src={shopCart} alt="" width="50" height="50" href='#' type='button' /></Link>
          </div>
        </div>
      </div>
</nav>
       
  )
}

export default NavBar