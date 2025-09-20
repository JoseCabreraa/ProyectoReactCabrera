import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/itemcount";
import { useParams } from "react-router-dom";

const productos = [
  {
    id: 1,
    name: "Chomba morley gris",
    category: "remeras",
    price: 5000,
    stock: 10,
    img: "/Imagenes/chomba.webp",
    description:
      "Una chomba de morley de alta calidad, ideal para cualquier ocasión.",
  },
  {
    id: 2,
    name: "Cargo baggy azul oscuro",
    category: "pantalones",
    price: 12000,
    stock: 5,
    img: "/Imagenes/pantalon.webp",
    description:
      "Pantalón cargo holgado con múltiples bolsillos y un ajuste cómodo.",
  },
  {
    id: 3,
    name: "Zapatillas Hylane Blancas",
    category: "zapatillas",
    price: 20000,
    stock: 8,
    img: "/Imagenes/zapas.webp",
    description:
      "Zapatillas deportivas de color blanco, perfectas para un estilo casual.",
  },
];

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((p) => p.id === parseInt(itemId)));
      }, 500);
    });
    getItem.then((res) => setItem(res));
  }, [itemId]);

  if (!item) return <h2>Cargando...</h2>;

  return (
    <div className="item-detail">
      <img src={item.img} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>
          <strong>Precio:</strong> ${item.price}
        </p>
        {}
        <ItemCount stock={item.stock} initial={1} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
