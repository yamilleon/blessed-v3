import React from 'react'
import {Link} from 'react-router-dom'
import "./fooTer.css";
import Facebook from "../../img/Facebook.png"
import instagram from "../../img/instagram.png"
import twitter from "../../img/twitter.jpg"




export const Footer = () => {
  return (
    <footer class="pie">
    <h2 class="pie__titulo--md">Seguinos en nuestras redes</h2>
    <div class="icon">
      <Link >
        <img
          src={Facebook}
          alt={Facebook}

        />
      </Link>
      <Link>
        <img src={twitter} alt={twitter}  />
      </Link>
      <Link>
        <img
          src={instagram}
          alt={instagram}
          
        />
      </Link>
      <div className="p-3">
            <ul className="mono-text">
                <Link className="nav-link active" to='/'>Inicio</Link>
                <Link className="nav-link active" to='/Cart'>Shopping Cart</Link>
                <hr/>
                <Link className="nav-link active" to='/category/1'>Hombres</Link>
                <Link className="nav-link active" to='/category/2'>Niños</Link>
                <Link className="nav-link active" to='/category/3'>Mujeres</Link>
                <Link className="nav-link active" to='/category/4'>Unisex</Link>
            </ul>
        </div>
    </div>
    
  </footer>
  )
}
