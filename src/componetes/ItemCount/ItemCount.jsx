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
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "0 1rem" }}>{count}</span>
      <button onClick={increment}>+</button>
      <br />
      <button onClick={addToCart} style={{ marginTop: "1rem" }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
