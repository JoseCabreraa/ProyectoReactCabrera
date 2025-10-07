import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="producto">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <Link to={`/item/${product.id}`} className="detalle-btn">
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
