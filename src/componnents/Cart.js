import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import './Cart.css'


const Cart = () => {
  
 const ctx = useContext(CartContext);
  
  return (
    <>
    <span>Soy El Carrito</span>
   
    
    {
      ctx.cartList.map (item => 
      <div> 
        <div className="Card">
        <img src={item.img} alt= {item.nombre}  />
        <p>Titulo:{item.nombre} </p>
        <p>Precio:{item.precio} </p>
        <p>stock:{item.stock} </p>
        <button onClick={()=> ctx.removeProduct(item.id)}> Delete Product</button>
        </div>
         </div>)
    }
    <button onClick={ctx.clearCart}>Delete Everything</button>
    </>
  )
}

export default Cart