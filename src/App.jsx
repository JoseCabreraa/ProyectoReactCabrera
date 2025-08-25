import React from "react";
import Navbar from "./componetes/NavBar/navbar";
import Itemlistcontainer from "./componetes/ItemListContainer/itemlistcontainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Itemlistcontainer titulo="Mi pagina de ropa 🚀" />
    </div>
  );
};

export default App;
