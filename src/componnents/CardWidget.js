import "./Navbar.css";
import { FaShopify } from "react-icons/fa";
import { useCartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";

export function CardWidget() {
  const { totalProducts } = useCartContext();
  return (
    <div>
      <Link to="/Cart">
        <button>
          <FaShopify /> <span>{totalProducts() || ""}</span>{" "}
        </button>
      </Link>
    </div>
  );
}
