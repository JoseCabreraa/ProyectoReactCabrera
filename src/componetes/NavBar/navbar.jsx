import React from "react";
import Cartwidget from "../Carwidget/cartwidget";
import { Link } from "react-router-dom";
import "./NavBar.css"; // <-- La importación ya estaba bien

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img
          src="https://thumbs.dreamstime.com/b/inspiraci%C3%B3n-en-el-dise%C3%B1o-del-logotipo-de-la-tienda-ropa-ilustraci%C3%B3n-vectorial-tela-shop-logo-ropas-uso-para-sitios-web-anuncios-275007403.jpg"
          alt="Logo de la tienda de ropa"
          className="logo-img"
        />
      </Link>

      <ul className="menu">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/ropa">Ropa</Link>
        </li>
      </ul>

      <Cartwidget />
    </nav>
  );
};

export default NavBar;
