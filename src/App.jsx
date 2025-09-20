import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componetes/NavBar/navbar";
import ItemListContainer from "./componetes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componetes/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer titulo="Bienvenido a la tienda 🚀" />}
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
