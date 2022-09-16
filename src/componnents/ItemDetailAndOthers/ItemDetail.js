import React from 'react';
import "./ItemDetail.css"
const ItemDetail = ({ListDetail})=>{
  return ( 
     <div>
          <div className="card" id={ListDetail.id}>
            <div>
              <img
                src={ListDetail.img}
                className="card-img-top"
                alt={ListDetail.nombre}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{ListDetail.nombre}</h5>
              <p className="card-text">precio: ${ListDetail.precio}</p>
              <button type="button" className="btn btn-primary">
                Agregar producto
              </button>
            </div>
          </div>
        </div>
        
      )
    }
    
    export default ItemDetail;
    