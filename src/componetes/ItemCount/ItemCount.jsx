import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => Math.min(prev + 1, stock));
  const decrement = () => setCount((prev) => Math.max(prev - 1, 1));

  return (
    <div className="item-count-container">
      {/* DIV ENVOLVENTE para aplicar la clase .counter-buttons */}
      <div className="counter-buttons">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>

      <button
        onClick={() => onAdd(count)}
        disabled={stock === 0}
        className="add-to-cart-btn"
      >
        Agregar al carrito
      </button>

      {stock === 0 && <p>Producto sin stock</p>}
    </div>
  );
};

export default ItemCount;
