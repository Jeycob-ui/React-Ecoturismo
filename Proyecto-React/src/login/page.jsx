import React, { useState } from "react";
import axios from "axios";
import "./page.css";

function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/login", {
        username,
        password,
      });

      setMsg("Inicio de sesión exitoso");
      console.log("TOKEN:", res.data.token);
    } catch (error) {
      setMsg(error?.response?.data?.msg || "Error");
    }
  };

  return (
    <div className="container">
      {/* VIDEO DE FONDO */}
      <video id="bg-video" autoPlay loop muted>
        <source src="src/assets/video/Videofondo4.mp4" type="video/mp4" />
      </video>

      {/* HEADER */}
      <header className="header">
        <h1>Risaralda EcoTurismo</h1>
      </header>

      {/* CARD DE LOGIN */}
      <div className="login-card">
        <label>Nombre de usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="register-text">
          ¿Todavía no tienes cuenta? <a href="#">Regístrate</a>
        </p>

        <button onClick={login}>Iniciar sesión</button>

        <p className="message">{msg}</p>
      </div>

      <footer className="footer">© 2025 Risaralda EcoTurismo</footer>
    </div>
  );
}

export default Loginpage;
