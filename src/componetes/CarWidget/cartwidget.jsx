import React from "react";
import "./CarWidget.css";

const imgCarrito =
  "https://static.vecteezy.com/system/resources/previews/004/798/846/non_2x/shopping-cart-logo-or-icon-design-vector.jpg";

const CarWidget = () => {
  return (
    <div>
      <img className="imagenCarrito" src={imgCarrito} alt="carrito de compra" />
    </div>
  );
};

export default CarWidget;
