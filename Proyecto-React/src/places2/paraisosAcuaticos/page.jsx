import React, { useState } from "react";
import "./lugares.css";

export default function ParaisosAcuaticosPage() {
  const [favoritos, setFavoritos] = useState([]);

  const lugares = [
    {
      nombre: "Lago De La Pradera",
      img: "src/assets/Lago.jpeg",
      desc: "La Pradera - Dosquebradas, Risaralda.",
      mapa: "https://maps.app.goo.gl/M6RgB1GUYqJwGdGfA",
      link: "lagolapradera.html",
    },
    {
      nombre: "La Laguna Del Otún",
      img: "src/assets/laguna.jpg",
      desc: "Pereira, Santa Rosa, Risaralda.",
      mapa: "https://maps.app.goo.gl/ndHDFrHHQYfNt8n19",
      link: "lagunadelotun.html",
    },
    {
      nombre: "Chorros De Don Lolo",
      img: "src/assets/lolo.jpg",
      desc: "Santa Rosa, Risaralda.",
      mapa: "https://maps.app.goo.gl/iraGYyGvchLDCFaj8",
      link: "chorrosdonlolo.html",
    },
    {
      nombre: "Termales de Santa Rosa",
      img: "src/assets/termaales.jpg",
      desc: "Santa Rosa, Risaralda.",
      mapa: "https://maps.app.goo.gl/zTkAVYrmFBmFvJCv7",
      link: "termalessantarosa.html",
    },
    {
      nombre: "Parque Metropolitano del Café",
      img: "src/assets/parquecafe.jpg",
      desc: "Av Sur - Pereira, Risaralda.",
      mapa: "https://maps.app.goo.gl/2ZBVKPdNQmpVnmDq9",
      link: "parquedelcafe.html",
    },
    {
      nombre: "Parque Acuático Consota",
      img: "src/assets/consota.jpg",
      desc: "Pereira - Cerritos, Risaralda.",
      mapa: "https://maps.app.goo.gl/Xe4dhpqnBSzML98b8",
      link: "consota.html",
    },
    {
      nombre: "Balneario Los Farallones",
      img: "src/assets/farallones.jpeg",
      desc: "La Virginia, Risaralda.",
      mapa: "https://maps.app.goo.gl/XbZoEF6SsNpzKCL88",
      link: "farallones.html",
    },
    {
      nombre: "Cascada Los Frailes",
      img: "src/assets/frailes2.webp",
      desc: "La Florida - Pereira, Risaralda.",
      mapa: "https://maps.app.goo.gl/PhcdF9sCzFxKAx3p7",
      link: "cascadalosfrailes.html",
    },
    {
      nombre: "Río San José",
      img: "src/assets/sanjose.webp",
      desc: "Cordillera Central - Pereira, Risaralda.",
      mapa: "https://maps.app.goo.gl/LmncErfzPCRCvGvUA",
      link: "riosanjose.html",
    },
    {
      nombre: "Piedras Marcadas Dosquebradas",
      img: "src/assets/piedras.jpg",
      desc: "Alto del Toro - Dosquebradas, Risaralda.",
      mapa: "https://maps.app.goo.gl/Ttq1WxYgq8LE9nit7",
      link: "piedrasmarcadas.html",
    },
  ];

  // Agregar o quitar favoritos
  const toggleFavorito = (nombre) => {
    if (favoritos.includes(nombre)) {
      setFavoritos(favoritos.filter((f) => f !== nombre));
    } else {
      setFavoritos([...favoritos, nombre]);
    }
  };

  return (
    <>
      <div className="contenedorTodo">
        <h1>Paraísos Acuáticos</h1>

        {/* Botón con contador de favoritos */}
        <button className="mostrar-favoritos">
          Favoritos (<span>{favoritos.length}</span>)
        </button>

        {/* Contenedor principal */}
        <div className="contenedor">
          <div className="cards">
            {lugares.map((lugar, index) => (
              <div className="card" key={index}>
                <img src={lugar.img} alt={lugar.nombre} />
                <h4>{lugar.nombre}</h4>
                <p>{lugar.desc}</p>

                {/* Ícono del mapa */}
                <button className="ubication-button">
                  <a href={lugar.mapa} target="_blank" rel="noopener noreferrer">
                    <img
                      src="src/assets/mapa2.svg"
                      style={{ width: "24px", height: "24px" }}
                      alt="Ubicación"
                    />
                  </a>
                </button>

                {/* Botón Más Info */}
                <a href={lugar.link}>
                  <button className="ubicacion">Más Info</button>
                </a>

                {/* Favoritos */}
                <button
                  className="favorito"
                  onClick={() => toggleFavorito(lugar.nombre)}
                >
                  {favoritos.includes(lugar.nombre) ? "❤️" : "🤍"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAVORITOS ABAJO */}
        <div className="favoritos-lista">
          <h2>⭐ Lugares Favoritos</h2>

          {favoritos.length === 0 ? (
            <p>No has agregado ningún lugar aún.</p>
          ) : (
            <ul>
              {favoritos.map((fav, i) => (
                <li key={i}>
                  {fav}
                  <button
                    className="remove-favorite"
                    onClick={() =>
                      setFavoritos(favoritos.filter((f) => f !== fav))
                    }
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Botón volver */}
        <a href="pagcentral2.html">
          <button className="volver">Volver</button>
        </a>
      </div>

      <footer>© 2025 Risaralda EcoTurismo</footer>
    </>
  );
}
