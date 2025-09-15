import React from "react";
import "./NavBar.css";
import CarWidget from "../CarWidget/CarWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
      <h1 className="titulo">Tienda Ropa</h1>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/remeras">Remeras</Link>
          </li>
          <li>
            <Link to="/category/pantalones">Pantalones</Link>
          </li>
          <li>
            <Link to="/category/zapatillas">Zapatillas</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <CarWidget />
    </header>
  );
};

export default NavBar;
