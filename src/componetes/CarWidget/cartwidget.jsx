import React from "react";
import "./CartWidget.css";

const imgCarrito = "./imagenes/carrito.png";

const CartWidget = () => {
  return (
    <div>
      <img className="imagenCarrito" src={imgCarrito} alt="carrito de compra" />
    </div>
  );
};

export default CartWidget;
