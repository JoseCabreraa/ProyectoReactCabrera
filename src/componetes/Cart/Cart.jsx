import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0)
    return (
      <div>
        <p>El carrito está vacío.</p>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
