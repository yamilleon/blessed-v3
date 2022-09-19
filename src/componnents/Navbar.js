import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { CardWidget } from "./CardWidget";
import logo from "./logo.svg";
import { Link } from "react-router-dom";


export function Navbar(){
  return (
    <div id="encabezado">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="logo container-fluid">
          <Link className="navbar-brand" to='/'
           >
          <img src={logo} className="Logo2" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to='/'
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/ubicacion'>
                  Ubicacion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contacto' >
                  Contacto
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="color nav-link dropdown-toggle"
                  to='/categorias'
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </Link>
                <ul
                  className="color2 dropdown-menu"
                  aria-labelledby="  navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to='category/1'>
                      Hombres
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='category/2'>
                      Mujeres
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='category/3'>
                      Unisex
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='category/4'>
                      Peques
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <span>
              <CardWidget />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
