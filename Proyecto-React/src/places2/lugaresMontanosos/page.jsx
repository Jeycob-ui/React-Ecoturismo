import React, { useState } from "react";
import "./lugares.css";

export default function lugaresMontanososPage() {
  const lugares = [
    { id: 1, titulo: "La Divisa De Don Juan", ubicacion: "Vía Altagracia, Altagracia, Pereira, Risaralda", imagen: "src/assets/divisa.jpeg", mapa: "https://maps.app.goo.gl/7seGQZ2LHdAMoNqJ6", info: "divisadonjuan.html" },
    { id: 2, titulo: "Alto Del Nudo", ubicacion: "Pereira, Risaralda", imagen: "src/assets/nudo.jpg", mapa: "https://maps.app.goo.gl/f3w9DC9zRFUMDEzv9", info: "altodelnudo.html" },
    { id: 3, titulo: "Alto Del Toro", ubicacion: "Pereira, Risaralda", imagen: "src/assets/toro.jpg", mapa: "https://maps.app.goo.gl/DyrpMApsB3Mz1hmV6", info: "altodeltoro.html" },
    { id: 4, titulo: "Jardín Botánico", ubicacion: "Universidad tecnologica de pereira, Risaralda", imagen: "src/assets/jardin.jpeg", mapa: "https://maps.app.goo.gl/hhkmfB9owU9PcB6Z7", info: "jardinbotanicoutp.html" },
    { id: 5, titulo: "Parque Nacional Natural Tatamá", ubicacion: "Cra. 5 #565, Pueblo Rico, Risaralda", imagen: "src/assets/tatama.jpg", mapa: "https://maps.app.goo.gl/hPSphPUBmXGBqeGJ6", info: "parquetatama.html" },
    { id: 6, titulo: "Jardín Botánico De Marsella", ubicacion: "Marsella, Risaralda", imagen: "src/assets/jardinM.jpg", mapa: "https://maps.app.goo.gl/L2ysAcHE6EvuNq3U7", info: "jardinbotanicomarsella.html" },
    { id: 7, titulo: "Parque Las Araucarias", ubicacion: "Cl. 13, Santa Rosa de Cabal, Risaralda", imagen: "src/assets/araucarias.jpg", mapa: "https://maps.app.goo.gl/SDZUo3UZpzU3YWq28", info: "parquearaucarias.html" },
    { id: 8, titulo: "Parque Regional Natural Cuchilla de San Juan", ubicacion: "Belén de Umbría, Risaralda", imagen: "src/assets/cuchilla.jpg", mapa: "https://maps.app.goo.gl/2uWtBq8BNCCHuCft9", info: "parquecuchillasanjuan.html" },
    { id: 9, titulo: "Parque Natural Regional Santa Emilia", ubicacion: "Carrera 4 #1\"N, Belén de Umbría, Risaralda", imagen: "src/assets/emilia.jpg", mapa: "https://maps.app.goo.gl/5G6AXY18b8hAwdfW6", info: "parquesantaemilia.html" },
    { id:10, titulo: "Cerro Batero", ubicacion: "Quinchía, Risaralda", imagen: "src/assets/batero.jpg", mapa: "https://maps.app.goo.gl/q6mCEfzAjGfJkuh56", info: "cerrobatero.html" },
    { id:11, titulo: "Puente Bernardo Arango", ubicacion: "Cra 8 #3-2, La Virginia, Risaralda", imagen: "src/assets/bernardo.jpg", mapa: "https://maps.app.goo.gl/NfTwdEXPBZiyWXmn9", info: "puentebernardoarango.html" },
    { id:12, titulo: "Estación Pereira", ubicacion: "Marsella, Risaralda", imagen: "src/assets/estacion.jpg", mapa: "https://maps.app.goo.gl/od3D1wQWK2SWD5Kt7", info: "estacionpereira.html" },
    { id:13, titulo: "Reserva Forestal La Nona", ubicacion: "a 7 km de Marsella,Risaralda", imagen: "src/assets/lanona.jpg", mapa: "https://maps.app.goo.gl/XacC2ScWUKbcgutv8", info: "reservaforestallanona.html" },
    { id:14, titulo: "Kaukitá Bosque Reserva", ubicacion: "Porteria Malabar Kaukita, km 7 Via Cerritos, Pereira, Risaralda", imagen: "src/assets/kaukita.jpeg", mapa: "https://maps.app.goo.gl/K3C93FAURYARtAvv6", info: "kaukitabosquereserva.html" },
    { id:15, titulo: "Reserva Natural Cerro Gobia", ubicacion: "Quinchía, Risaralda", imagen: "src/assets/gobia.jpg", mapa: "https://maps.app.goo.gl/8BF3SXF4RTpRbVxeA", info: "reservanaturalcerrogobia.html" },
    { id:16, titulo: "Reserva Natural DMI Agualinda", ubicacion: "Apía, Risaralda", imagen: "src/assets/distritomanejo.jpg", mapa: "https://maps.app.goo.gl/UNc9cTccV6LuGySU7", info: "distritomanejo.html" }
  ];

  const [favoritos, setFavoritos] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const toggleFavorito = (lugar) => {
    if (favoritos.some(f => f.id === lugar.id)) {
      setFavoritos(favoritos.filter(f => f.id !== lugar.id));
    } else {
      setFavoritos([...favoritos, lugar]);
    }
  };

  const eliminarFavorito = (id) => {
    setFavoritos(favoritos.filter(f => f.id !== id));
  };

  return (
    <div className="contenedorTodo">
      <h1>Parques y Más...</h1>

      <button id="mostrar-favoritos" className="mostrar-favoritos" onClick={() => setPopupVisible(true)}>
        Favoritos (<span id="contador-favoritos">{favoritos.length}</span>)
      </button>

      <div className="contenedor">
        <div className="cards">
          {lugares.map((l) => (
            <div className="card" key={l.id}>
              <img src={l.imagen} alt={l.titulo} />
              <h4>{l.titulo}</h4>
              <p>{l.ubicacion}</p>

              <button className="ubication-button">
                <a href={l.mapa} target="_blank" rel="noreferrer">
                  <img src="src/assets/mapa2.svg" style={{ width: 24, height: 24 }} alt="mapa" />
                </a>
              </button>

              <a href={l.info}>
                <button className="ubicacion ubicacionn">Más Info</button>
              </a>

              <button className="favorito" data-lugar={l.titulo} onClick={() => toggleFavorito(l)}>
                {favoritos.some(f => f.id === l.id) ? "❤️" : "🤍"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contenedor de favoritos (popup) */}
      <div id="popup-favoritos" className={`popup ${popupVisible ? "" : "hidden"}`}>
        <div className="popup-content">
          <button id="cerrar-popup" className="cerrar-popup" onClick={() => setPopupVisible(false)}>X</button>
          <h2>Mis Favoritos</h2>

          <ul id="favoritos-list">
            {favoritos.length === 0 ? null : favoritos.map(f => (
              <li key={f.id}>
                {f.titulo}
                <button className="eliminar-favorito" onClick={() => eliminarFavorito(f.id)}>❌</button>
              </li>
            ))}
          </ul>

          {favoritos.length === 0 && <p id="mensaje-vacio" className="hidden">No has agregado ningún lugar aún.</p>}
        </div>
      </div>

      <a href="pagcentral2.html">
        <button className="volver">Volver</button>
      </a>

      <footer>© 2025 Risaralda EcoTurismo</footer>
    </div>
  );
}
