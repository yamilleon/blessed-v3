import React from 'react'
import  { useContext } from 'react';
import { CartContext } from '../CartContext';

const ItemCart = ({articles}) => {
    const ctx = useContext(CartContext);

  return (
    <div className='ItemCard'>
        <img src={articles.img} alt= {articles.nombre}  />
        <div>
        <p>titulo:{articles.nombre} </p>
        <p>precio:{articles.precio} </p>
        <p>cantidad:{articles.qty} </p>
        <p>subtotal:{articles.qty * articles.precio} </p>
        <button onClick={() => ctx.removeProduct(articles.id)}> Delete Product</button>
        </div>
    </div> 
  )
}

export default ItemCart