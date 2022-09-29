import React from "react";
import "./ItemDetail.css";
import { Counter } from "../Counter";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";



const ItemDetail = ({ ListDetail }) => {
  const [goToCart, setgoToCart] = useState(0);

  const { addProduct } = useCartContext();
  const onAdd = (quantify) => {
    alert("Escogiste " + quantify + " Productos y se sumaron a tu Carrito" );
    setgoToCart(quantify);
    addProduct(ListDetail, quantify);
  };



  return (
    <div>
      <div className="card">
        <div>
          <img
            src={ListDetail.img}
            className="card-img-top"
            alt={ListDetail.nombre}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{ListDetail.nombre}</h5>
          <p className="card-text">Detalles:{ListDetail.detail}</p>
          <p className="card-text">precio: ${ListDetail.precio}</p>
          { 
          goToCart 
           === 0
          ?<Counter stock={ListDetail.stock} inicial={goToCart}  onAdd={onAdd} />: 
          <Link to='/Cart'><button>Checkout</button></Link>

          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
