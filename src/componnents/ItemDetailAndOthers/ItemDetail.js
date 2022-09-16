/*import React from 'react'
import { useState } from 'react';
import ItemCount from './ItemCount'
import { Link } from "react-router-dom"

function ItemDetail({ producto }) {
    const [contador, setContador] = useState(0);
    //variable para generar un numero random para el stock(no es del desafio esto)
    let randomStock = Math.floor(Math.random() * 50);
    //funcion onAdd del desafio ItemCount para pasar por props a ItemCount y que muestre por alert la cantidad añadida de producto
    const onAdd = (count) => {
        alert(`Se añadio ${count} productos`);
        setContador(count)
    }
    //Este componente muestra el objeto recibido por props.
    return (
        <div id={producto.id} className='fatherDetail container-lg'>
            <div className='imgDetail'>
                <img src={producto.img} alt={producto.title} />
            </div>
            <div className='productDetail'>
                <p className='titleDetail'>{producto.title}</p>
                <p className='stockDetail'>Stock disponible: {randomStock}</p>
                <p >Precio : <span className='priceDetail'>${producto.precio}</span> </p>
                <p >Marca: <span className='brandDetail'>{producto.marca}</span></p>
                <p>{producto.description}</p>
                <div className='countDetail'>
                    {contador === 0 ? <ItemCount stock={randomStock} initial={contador} onAdd={onAdd}></ItemCount> :
                        <Link to="/gameShop-Lucas-Vasquez/cart">
                            <button type="button" className="btn btn-primary">Ver Carrito</button>
                        </Link>
                    }

                </div>
            </div>
        </div>

    )
}

export default ItemDetail*/
import React from 'react';

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
    