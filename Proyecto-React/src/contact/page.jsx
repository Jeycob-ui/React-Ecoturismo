// import React from 'react'
// import Header from '../../components/Header/Header'
// import Footer from '../../components/Footer/Footer'

// const ContactPage = () => {
//   return (

//     <div>
//       PAGINA DE CONTACTOS
//     </div>
//   )

// }
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./page.css"; // tu mismo CSS

export default function ContactPage() {
  return (
    <>
      <div className="container">
        <div className="form">
          <div className="contact-info left-col">
            <h3 className="tittle">Pongámonos en contacto</h3>
            <p className="text">
              Escríbenos y te buscamos la mejor opción para tu página
            </p>

            <div className="info">
              <div className="information">
                <img
                  src="/imagenes/maps-and-location.png"
                  className="icon"
                  alt=""
                />
                <p>Dosquebradas-Pereira</p>
              </div>

              <div className="information">
                <img
                  src="/imagenes/correo-electronico.png"
                  className="icon"
                  alt=""
                />
                <a href="mailto:proyectoecoturismo2@gmail.com">
                  <p>proyectoecoturismo2@gmail.com</p>
                </a>
              </div>

              <div className="information">
                <img src="/imagenes/telefono.png" className="icon" alt="" />
                <a href="tel:3134152020">
                  <p>3134152020</p>
                </a>
              </div>

              <div className="information copyright">
                <p>© 2025 RisaraldaEcoTurismo</p>
              </div>
            </div>

            <div className="social-media">
              <p>Conéctate con nosotros:</p>

              <div className="social-icon">
                <a href="https://www.facebook.com/share/1Bf6vo7qJA/?mibextid=wwXIfr">
                  <img src="/components/imagenes/iconofb.png" width="30px" alt="" />
                </a>

                <a href="https://wa.link/tuxrjn">
                  <img src="/imagenes/iconowp.png" width="30px" alt="" />
                </a>

                <a href="#">
                  <img src="/imagenes/iconoig.png" width="30px" alt="" />
                </a>
              </div>
              <div className="button-wrap">
                <button id="volver">
                  <a href="/pagcentral.html">Volver</a>
                </button>
              </div>
            </div>
          </div>

          <div className="contact-form right-col">
            <form
              action="contactosbienhecho.html"
              aria-label="Formulario de contacto"
            >
              <h3 className="tittle">Contáctanos</h3>

              <div className="input-container focus">
                <input id="name" type="text" name="name" className="input" />
                <label htmlFor="name">Nombre de usuario</label>
                <span>Nombre de usuario</span>
              </div>

              <div className="input-container focus">
                <input id="email" type="email" name="email" className="input" />
                <label htmlFor="email">Correo</label>
                <span>Correo</span>
              </div>

              <div className="input-container focus">
                <input id="phone" type="tel" name="phone" className="input" />
                <label htmlFor="phone">Teléfono</label>
                <span>Teléfono</span>
              </div>

              <div className="input-container textarea focus">
                <textarea
                  id="message"
                  name="message"
                  className="input"
                ></textarea>
                <label htmlFor="message">Mensaje</label>
                <span>Mensaje</span>
              </div>

              <input type="submit" value="Enviar" className="btn btn-send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

