import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    
    
    const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			cartList(
				cartList.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCartList([...cartList, { ...item, quantity }]);
		}
	};
    const clearCart = () => setCartList([]);

    const isInCart = (id) => cartList.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCartList(cartList.filter(product => product.id !==id)) 

    const totalPrice = () => {return cartList.reduce((prev, act) => prev + act.qty * act.precio, 0)}

    const totalProducts = () => cartList.reduce ((acumulador, productoActual) => acumulador + productoActual.qty, 0);
 




    return (
            <CartContext.Provider value={{cartList, addItem, clearCart, isInCart, removeProduct, totalPrice, totalProducts}}>
                { children }
            </CartContext.Provider>
    );
}
 export default CartContextProvider;
