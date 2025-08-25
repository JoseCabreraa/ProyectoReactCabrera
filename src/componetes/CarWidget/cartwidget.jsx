import React from "react";
import "./cartwidget.css";
const imgcarrito =
  "https://static.vecteezy.com/system/resources/previews/004/798/846/non_2x/shopping-cart-logo-or-icon-design-vector.jpg";
const CartWidget = () => {
  return (
    <div>
      <img className="ImagenCarrito" src={imgcarrito} alt="carrito de compra" />
    </div>
  );
};

export default CartWidget;
