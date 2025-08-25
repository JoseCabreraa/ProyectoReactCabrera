import React from "react";
import "./navbar.css";
import Cartwidget from "../CarWidget/cartwidget";

const NavBar = () => {
  return (
    <header>
      <h1 className="titulo">tienda ropa</h1>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>contacto</li>
        </ul>
        <Cartwidget />
      </nav>
    </header>
  );
};

export default NavBar;
