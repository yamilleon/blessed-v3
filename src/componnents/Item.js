import React from "react";

const Item = ({ articles }) => {
  return (
    <div>
      <div className="card" id={articles.id}>
        <div>
          <img
            src={articles.img}
            className="card-img-top"
            alt={articles.nombre}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{articles.nombre}</h5>
          <p className="card-text">precio: ${articles.precio}</p>
          <button type="button" className="btn btn-primary">
            Agregar producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
