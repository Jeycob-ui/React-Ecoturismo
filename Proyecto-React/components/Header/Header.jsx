import React from "react";
import { Link } from "react-router-dom";
import icono from "../../components/imagenes/iconoecoturismo.jpg";

const Header = () => {
  return (
    <>
      {/* HEADER */}
      <header>
        <div className="header-container">
          <div className="logo-principal">
            <img src={icono} alt="Logo" width="60" />
            <div className="titulos">
              <h2 className="risaralda">RisaraldaEcoTurismo</h2>
            </div>
          </div>

          <nav className="navbar">
            <Link to="/comments">Reseñas</Link>
            <Link to="/places">Lugares</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/login">Login</Link>

            {/* <Link to="/">Inicio</Link> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
