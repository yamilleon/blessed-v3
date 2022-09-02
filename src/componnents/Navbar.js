import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import 'bootstrap/dist/js/bootstrap.bundle';



 export function Navbar() {
  return (
    <div id="encabezado">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html"
          ><img src="src\img\logo.webp"  alt="Logo Blessed"
        /></a>
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
              <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
                >Inicio</a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="ubicacion.html">Ubicacion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contacto.html">Contacto</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="color nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul className="color2 dropdown-menu" aria-labelledby="  navbarDropdown">
                <li>
                  <a className="dropdown-item" href="hombres.html">Hombres</a>
                </li>
                <li>
                  <a className="dropdown-item" href="mujeres.html">Mujeres</a>
                </li>
                <li>
                  <a className="dropdown-item" href="unisex.html">Unisex</a>
                </li>
                <li>
                  <a className="dropdown-item" href="ninos.html">Peques</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  );
}

