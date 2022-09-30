import React from "react";
import { Link } from "react-router-dom";

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
          <Link to={`/item/${articles.id}`}><button>Detail</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
