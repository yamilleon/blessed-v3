import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './Cart.css'


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
      <div className='Carta'>
        <div className='card'>
           <div> <img src={product.img} className="card-img-top" alt={product.nombre} /></div>
             <div className="card-body">

                <h5 className="card-title">Título: {product.nombre}</h5>
                <p className="card-text">Cantidad: {product.quantity}</p>
                <p className="card-text">Precio u.: {product.precio}</p>
                <p className="card-text">Subtotal: ${product.quantity * product.precio}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
        </div>
       
    )
}

export default ItemCart