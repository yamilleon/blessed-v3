import React from "react"
import { useState } from "react"
import './counter.css';


 export const Counter = ({inicial,stock}) => {
  const [contador, setContador] = useState(inicial)

  const sumar = () => {
    if (contador < stock){
    setContador( contador + 1 )};
  }
  const restar = () => {
    if (contador > inicial){
    setContador( contador - 1 );}
  };
  const pintarEnCarrito = () => 
  {
    setContador(contador)
    console.log(contador)
  }


  return (
    <a className="counterSpaint">
      <button onClick={()=> sumar()}> + </button>
      <span>{contador}</span>
      <button onClick={()=> restar()}> - </button>
      <button onClick={()=> pintarEnCarrito()}> Agregar Al Carrito </button>
    </a>
  )
}



