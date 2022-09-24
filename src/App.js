import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./componnents/Navbar";
import { ItemListContainer } from "./componnents/ItemListOthers/ItemListContainer ";
import { ItemDetailContainer as IDC } from "./componnents/ItemDetailAndOthers/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./componnents/Cart";
import CartContextProvider from "./componnents/CartContext";


function App() {
  return (
    <>
    <CartContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer cambios={"Hola mundo"} />}
          />
          <Route
            path="category/:categoria"
            element={<ItemListContainer cambios={"Hola mundo"} />}
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="item/:id" element={<IDC cambios={"Hola mundo"} />} />
        </Routes>
      </Router>
      </CartContextProvider>
    </>
  );
}

export default App;
