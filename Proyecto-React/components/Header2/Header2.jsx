import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import icono from "../../components/imagenes/iconoecoturismo.jpg";

const Header2 = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="header-container">
        <div className="logo-principal">
          <img src={icono} alt="Logo" width="60" />
          <div className="titulos">
            <h2 className="risaralda">RisaraldaEcoTurismo</h2>
          </div>
        </div>

        <nav className="navbar">
          <Link to="/comments2">Reseñas</Link>

          {/* Menú desplegable de Lugares */}
          <div className="dropdown" ref={dropdownRef}>
            <button
              className="dropdown-btn"
              onClick={toggleMenu}
              aria-expanded={openMenu}
              aria-haspopup="true"
            >
              Lugares <span className="arrow">{openMenu ? "▲" : "▼"}</span>
            </button>

            {openMenu && (
              <ul className="dropdown-menu" role="menu">
                <li>
                  <Link to="/paraisosAcuaticos" role="menuitem">
                    <span className="icono">🏖️</span> Paraísos Acuáticos
                  </Link>
                </li>
                <li>
                  <Link to="/lugaresMontanosos" role="menuitem">
                    <span className="icono">🏞️</span> Parques y Más…
                  </Link>
                </li>
                <li>
                  <Link to="/territoriosDelCafe" role="menuitem">
                    <span className="icono">☕</span> Territorios del Café
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="/contact2">Contacto</Link>
          <Link to="/login">👤 Perfil</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header2;