import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} />

      <div className="detalle-contenido">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <p>Stock: {product.stock}</p>

        {added ? (
          <p>Producto agregado al carrito</p>
        ) : (
          <ItemCount stock={product.stock} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
