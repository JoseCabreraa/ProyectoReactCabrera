import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { createOrder } from "../../services/firestoreService";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "" });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer,
      items: cart,
      total: totalPrice,
      date: new Date(),
    };
    const id = await createOrder(order);
    setOrderId(id);
    clearCart();
  };

  if (orderId)
    return (
      <div>
        <h2>Compra confirmada!</h2>
        <p>ID de la orden: {orderId}</p>
      </div>
    );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={buyer.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={buyer.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Finalizar compra</button>
    </form>
  );
};

export default CheckoutForm;
