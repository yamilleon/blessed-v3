import React from 'react'
import { useCartContext } from '../Context/CartContext'
import ItemCart from './ItemCart';
import { Link } from "react-router-dom";
import './Cart.css'


const Cart = () => {
  
  const { cart, totalPrice, clearCart } = useCartContext();
  const createOrder = () => {
	console.log('createOrder')
  };

  
  if (cart.length === 0) {
		return (
			<>
				<p>No hay nada en el carrito :c</p>
				<Link to="/">Ir a comprar</Link>
			</>
		);
	}

	return (
		<>       <button onClick={clearCart}>Delete Everything</button>

			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>total: {totalPrice()}</p>
<button onClick={createOrder} >Compra Ya</button>
		</>

	);
};

export default Cart;