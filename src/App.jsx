import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./componetes/NavBar/navbar";
import ItemListContainer from "./componetes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componetes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componetes/Cart/Cart";
import CheckoutForm from "./componetes/CheckoutForm/CheckoutForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<CheckoutForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
