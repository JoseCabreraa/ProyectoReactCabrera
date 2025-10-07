import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
const Cart = () => {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <p>El carrito está vacío.</p>
        <Link to="/" className="btn-checkout">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3 className="cart-total">Total: ${totalPrice}</h3>

      <div className="cart-controls">
        <button onClick={clearCart} className="btn-vaciar">
          Vaciar Carrito
        </button>

        <Link to="/checkout" className="btn-checkout">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
