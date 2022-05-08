import React from 'react'
import styles from './carrusel.css'
import Uno from './I1.jpg'
import Dos from './I2.jpg'
import Tres from './I3.jpg'
import Cuatro from './I4.jpg'
import Cinco from './I5.jpg'
import Seis from './I6.jpg'

export default function carrusel() {
  return (
    <div>
      {/* Tarjetas de las imágenes */}
      {/* Tarjeta de la imagen 1 */}
      <div id="conteItemsCarrusel" style={styles}>
        <div className="itemCarrusel" id="itemCarrusel-1">
          <div className="tarjetaCarrusel" id="tarjetaCarrusel-1">
            <img className="Img1" src={Uno} alt="Imagen 1" />
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-6">
              <i>I</i>
            </a>
            <a href="#itemCarrusel-2">
              <i>D</i>
            </a>
          </div>
        </div>
        {/* Tarjeta de la imagen 2 */}
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
        {/* Tarjeta de la imagen 3 */}
        <div className="itemCarrusel" id="itemCarrusel-3">
          <div className="tarjetaCarrusel" id="tarjetaCarrusel-3">
            <img className="Img1" src={Tres} alt="Imagen 3" />
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-2">
              <i>I</i>
            </a>
            <a href="#itemCarrusel-4">
              <i>D</i>
            </a>
          </div>
        </div>

        {/* Tarjeta de la imagen 4 */}
        <div className="itemCarrusel" id="itemCarrusel-4">
          <div className="tarjetaCarrusel" id="tarjetaCarrusel-4">
            <img className="Img1" src={Cuatro} alt="Imagen 4" />
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-3">
              <i>I</i>
            </a>
            <a href="#itemCarrusel-5">
              <i>D</i>
            </a>
          </div>
        </div>

        {/* Tarjeta de la imagen 5 */}
        <div className="itemCarrusel" id="itemCarrusel-5">
          <div className="tarjetaCarrusel" id="tarjetaCarrusel-5">
            <img className="Img1" src={Cinco} alt="Imagen 5" />
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-4">
              <i>I</i>
            </a>
            <a href="#itemCarrusel-6">
              <i>D</i>
            </a>
          </div>
        </div>

        {/* Tarjeta de la imagen 6 */}
        <div className="itemCarrusel" id="itemCarrusel-6">
          <div className="tarjetaCarrusel" id="tarjetaCarrusel-6">
            <img className="Img1" src={Seis} alt="Imagen 6" />
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-5">
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
        <a href="#itemCarrusel-4">-</a>
        <a href="#itemCarrusel-5">-</a>
        <a href="#itemCarrusel-6">-</a>
      </div>
    </div>
  )
}
