import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    
    const addItem = (product, qty) => {
        const newCart = cartList.filter(prod => prod.id !== product.id)
        newCart.push({...product, quantity: qty});
        setCartList(newCart);
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
