import React from "react";
import "./CartWidget.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useCart();
  return (
    <Link to="/cart">🛒 {totalItems > 0 && <span>{totalItems}</span>}</Link>
  );
};

export default CartWidget;
