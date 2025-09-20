import React, { useState } from "react";
import "./itemcount.css";
const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const addToCart = () => {
    alert(`Agregaste ${count} producto(s) al carrito`);
  };

  return (
    <div className="item-count-container">
      <div className="counter-buttons">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button className="add-to-cart-btn" onClick={addToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
