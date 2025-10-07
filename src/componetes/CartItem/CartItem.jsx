import React from "react";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
      <h4>{item.title}</h4>
      <p>Cantidad: {item.quantity}</p>
      <p>Subtotal: ${item.price * item.quantity}</p>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
