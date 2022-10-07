import React from "react";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";
import "./Cart.css";
import {
  serverTimestamp,
  doc,
  setDoc,
  collection,
  increment,
  updateDoc,
} from "firebase/firestore";
import db from "../utils/firebaseConfig";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  const createOrder = async () => {
    const itemsforDb = cart.map((item) => ({
      id: item.id,
      title: item.nombre,
      price: item.precio,
      quantity: item.quantity,
    }));
    let order = {
      buyer: {
        name: "Panchito",
        email: "Marypanchitos@gmail.com",
        cel: "1234567891",
        addres: "Haxia hil 1234",
      },
      items: itemsforDb,
      date: serverTimestamp(),
      total: totalPrice(),
    };
    const newOrderRef = doc(collection(db, "orders"));
    await setDoc(newOrderRef, order);
    itemsforDb.forEach(async (item) => {
      const itemRef = doc(db, "articles", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.quantity),
      });
    });
    clearCart();

    alert("se creo tu orden de compra tu id es :" + newOrderRef.id);
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
    <div className="d-flex flex-xl-column
    flex-wrap mb-3">
      {" "}
      <button onClick={clearCart}>Delete Everything</button>
    
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p className="toTal card-text" >total: {totalPrice()}</p>
      <button onClick={() => createOrder()}>Compra Ya</button>
    </div>
  );
};

export default Cart;
