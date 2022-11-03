import logo from "../img/logo.png"


const NavBar = () => {
  return (
<nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  <div className="p-2">
    <img src={logo} alt="logo" width="80" height="80"/>
  </div>  
      <div className="container-fluid">
          <a className="navbar-brand" href="#">Inicio</a>
        <div className="collapse navbar-collapse show" id="navbarDark">
           <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Remeras</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Camperas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gorras</a>
            </li>
          </ul>
        </div>
      </div>
</nav>
       
  )
}

export default NavBar