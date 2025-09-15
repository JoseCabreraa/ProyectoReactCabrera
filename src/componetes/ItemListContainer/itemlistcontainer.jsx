import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { useParams, Link } from "react-router-dom";

const productos = [
  {
    id: 1,
    name: "Chomba morley gris",
    category: "remeras",
    price: 5000,
    stock: 10,
    img: "/Imagenes/chomba.webp",
  },
  {
    id: 2,
    name: "Cargo baggy azul oscuro",
    category: "pantalones",
    price: 12000,
    stock: 5,
    img: "/Imagenes/pantalon.webp",
  },
  {
    id: 3,
    name: "Zapatillas Hylane Blancas",
    category: "zapatillas",
    price: 20000,
    stock: 8,
    img: "/Imagenes/zapas.webp",
  },
];

const ItemListContainer = ({ titulo }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          categoryId
            ? productos.filter((p) => p.categoria === categoryId)
            : productos
        );
      }, 500);
    });
    getData.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{titulo}</h2>
      <div className="productos">
        {items.map((prod) => (
          <div key={prod.id} className="producto">
            <img src={prod.img} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>Precio: ${prod.precio}</p>
            <Link to={`/item/${prod.id}`} className="detalle-btn">
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
