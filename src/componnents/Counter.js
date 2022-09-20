import React from "react";
import { useState } from "react";
import "./counter.css";

export const Counter = ({ inicial, stock, onAdd }) => {
  const [contador, setContador] = useState(inicial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="counterSpaint">
      <button onClick={() => sumar()}> + </button>
      <span>{contador}</span>
      <button onClick={() => restar()}> - </button>
      <button onClick={() => onAdd(contador)}> Agregar Al Carrito </button>
    </div>
  );
};
