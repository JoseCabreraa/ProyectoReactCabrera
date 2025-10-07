import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../services/firestoreService";

const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const data = categoryId
        ? await getProductsByCategory(categoryId)
        : await getAllProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  if (products.length === 0) return <p>No hay productos disponibles.</p>;

  return (
    // AÑADIMOS ESTE DIV para aplicar la clase ".item-list-container"
    <div className="item-list-container">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
