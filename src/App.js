import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./componnents/Navbar";
import { ItemListContainer } from "./componnents/ItemListOthers/ItemListContainer ";
import { ItemDetailContainer as IDC } from "./componnents/ItemDetailAndOthers/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./Context/CartContext";
import Cart from "./componnents/Cart/Cart"
import {Footer} from "./componnents/Footer/Footer"

function App() {
  return (
    <>
    
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer  />}/>
            <Route path="category/:categoria" element={<ItemListContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="item/:id" element={<IDC />} />
           
          </Routes> 
         
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
