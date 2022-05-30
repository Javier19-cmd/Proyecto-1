// Referencias:
// Css tabs: https://www.youtube.com/watch?v=QtwXQdlvyWA&t=22s&ab_channel=CodingNepal
import React from 'react'
import styles from './Galeria.css'
/* Imágenes del primer apartado de la galería */
import Uno from './Imagen1.png'
import Dos from './Imagen2.png'
import Tres from './Imagen3.png'
import Cuatro from './Imagen4.png'
import Cinco from './Imagen5.jpg'
import Veinticuatro from './imagen24.png'

/* Imágenes del segundo apartado de la galería */
import Seis from './Imagen6.png'
import Siete from './Imagen7.png'

/* Imágenes del tercer apartado de la galería */
import Ocho from './Imagen8.png'
import Nueve from './Imagen9.png'
import Diez from './Imagen10.png'
import Once from './Imagen11.png'
import Doce from './Imagen12.png'

/* Imágenes del cuarto apartado de la galería */
import Trece from './Imagen13.png'
import Catorce from './Imagen14.png'
import Quince from './Imagen15.png'
import Dieciseis from './Imagen16.png'
import Diecisiete from './Imagen17.png'

/* Imágenes del quinto apartado de la galería */
import Dieciocho from './Imagen18.jpg'
import Diecinueve from './Imagen19.jpg'
import Veinte from './Imagen20.jpg'
import Veintiuno from './Imagen21.jpg'
import Veintidos from './Imagen22.jpg'

function Galeria() {
  return (
    <div className="Wrapper" style={styles}>
      {/* Slider */}
      <input type="radio" name="slider" id="productos" checked />
      <input type="radio" name="slider" id="smartphones" />
      <input type="radio" name="slider" id="tablets" />
      <input type="radio" name="slider" id="TV" />
      <input type="radio" name="slider" id="Elec" />
      {/* Navbar para las galerías de imágenes */}
      <nav className="Titus">
        <label htmlFor="productos" name="productos">
          <i className="Destacados">Productos Destacados</i>
        </label>
        <label htmlFor="smartphones" name="smartphones">
          <i className="Smartphones">Smartphones</i>
        </label>
        <label htmlFor="tablets" name="tablets">
          <i className="Tablets">Tablets & Wearebles</i>
        </label>
        <label htmlFor="TV" name="TV">
          <i className="Av">Tv & Av</i>
        </label>
        <label htmlFor="Elec" name="Elec">
          <i className="Electrodos">Electrodomésticos</i>
        </label>
        {/* <div className="slider" /> */}
      </nav>

      {/* Sección en donde irán las imágenes */}
      <section>
        <div className="content content-1">
          <div className="Conte1">
            <img src={Veinticuatro} alt="Veintitres" className="Veinticuatro" />
            <img src={Uno} alt="Uno" className="Uno" />
            <img src={Dos} alt="Dos" className="Dos" />
            <img src={Tres} alt="Tres" className="Tres" />
            <p className="Texto1">Smartphones</p>
            <img src={Cuatro} alt="Cuatro" className="Cuatro" />
            <p className="Texto2">Wearables</p>
            <img src={Cinco} alt="Cinco" className="Cinco" />
          </div>
        </div>

        <div className="content content-2">
          <div className="Conte2">
            <img src={Seis} alt="Seis" className="Seis" />
            <img src={Siete} alt="Siete" className="Siete" />
          </div>
        </div>

        <div className="content content-3">
          <div className="Conte3">
            <img src={Ocho} alt="Ocho" className="Ocho" />
            <img src={Nueve} alt="Nueve" className="Nueve" />
            <img src={Diez} alt="Diez" className="Diez" />
            <img src={Once} alt="Once" className="Once" />
            <img src={Doce} alt="Doce" className="Doce" />
          </div>
        </div>

        <div className="content content-4">
          <div className="Conte4">
            <img src={Trece} alt="Trece" className="Trece" />
            <img src={Catorce} alt="Catorce" className="Catorce" />
            <img src={Quince} alt="Quince" className="Quince" />
            <img src={Dieciseis} alt="Dieciseis" className="Dieciseis" />
            <img src={Diecisiete} alt="Diecisiete" className="Diecisiete" />
          </div>
        </div>

        <div className="content content-5">
          <div className="Conte5">
            <img src={Dieciocho} alt="Dieciocho" className="Dieciocho" />
            <img src={Diecinueve} alt="Diecinueve" className="Diecinueve" />
            <img src={Veinte} alt="Veinte" className="Veinte" />
            <img src={Veintiuno} alt="Veintiuno" className="Veintiuno" />
            <img src={Veintidos} alt="Veintidos" className="Veintidos" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Galeria
