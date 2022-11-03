import { Link } from "react-router-dom"



function Item({producto}) {




  return (
    <>
     <div className="col-sm-12 mb-2 col-md-4" key={producto.id}> 
       <div className="card">
           <div className="row g-0">
              <div className="col-5 col-sm-4">
                 <img src={producto.img} className="img-fluid" alt="card-horizontal-image" width="100" height="100" />
              </div>
            <div className="col-7 col-sm-8">
              <div className="card-body">
                 <h5 className="card-title">{producto.name} </h5>
                     <p className="card-text"> ARS {producto.price} </p>
                     <p className="card-text"><small className="text-muted">stock: {producto.stock}</small></p>
                     <Link to={`/detail/${producto.id} `}> <button type="button" className="btn btn-outline-primary">Product detail</button></Link>
              </div>
            </div>
          </div>
      </div>
    </div>

        
    </>
  )
}

export default Item