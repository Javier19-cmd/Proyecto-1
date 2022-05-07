import React from 'react'
import styles from './carrusel.css'
import Uno from './I1.jpg'
import Dos from './I2.jpg'
import Tres from './I3.jpg'

export default function carrusel() {
  return (
    <div>
      {/* Tarjetas de las imágenes */}
      <div id="conteItemsCarrusel" style={styles}>
        <div className="itemCarrusel" id="itemCarrusel-1">
          <div className="tarjetaCarrusel" id="tarjetaCarrusel-1">
            <img className="Img1" src={Uno} alt="Imagen 1" />
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-3">
              <i>I</i>
            </a>
            <a href="#itemCarrusel-2">
              <i>D</i>
            </a>
          </div>
        </div>
        <div className="itemCarrusel" id="itemCarrusel-2">
          <div className="tarjetaCarrusel" id="tarjetaCarrusel-2">
            <img className="Img1" src={Dos} alt="Imagen 2" />
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-1">
              <i>I</i>
            </a>
            <a href="#itemCarrusel-3">
              <i>D</i>
            </a>
          </div>
        </div>

        <div className="itemCarrusel" id="itemCarrusel-3">
          <div className="tarjetaCarrusel" id="tarjetaCarrusel-3">
            <img className="Img1" src={Tres} alt="Imagen 3" />
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-2">
              <i>I</i>
            </a>
            <a href="#itemCarrusel-1">
              <i>D</i>
            </a>
          </div>
        </div>
      </div>

      <div id="contePuntos">
        <a href="#itemCarrusel-1">-</a>
        <a href="#itemCarrusel-2">-</a>
        <a href="#itemCarrusel-3">-</a>
      </div>
    </div>
  )
}
