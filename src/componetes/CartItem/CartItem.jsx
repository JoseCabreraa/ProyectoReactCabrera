import React from "react";
import { useCart } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <h4>{item.title}</h4>
      <p>Cantidad: {item.quantity}</p>
      <p>Subtotal: ${item.price * item.quantity}</p>

      <button onClick={() => removeItem(item.id)} className="btn-remover">
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
