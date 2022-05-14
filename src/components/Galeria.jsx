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
      <nav>
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
        <div className="slider" />
      </nav>

      {/* Sección en donde irán las imágenes */}
      <section>
        <div className="content content-1">
          <div className="Conte1">
            <img src={Uno} alt="Uno" className="Uno" />
            <img src={Dos} alt="Dos" className="Dos" />
            <img src={Tres} alt="Tres" className="Tres" />
            <img src={Cuatro} alt="Cuatro" className="Cuatro" />
            <img src={Cinco} alt="Cinco" className="Cinco" />
          </div>
        </div>

        <div className="content content-2">
          <div className="Title">Encabezado 2</div>
        </div>

        <div className="content content-3">
          <div className="Title">Encabezado 3</div>
        </div>

        <div className="content content-4">
          <div className="Title">Encabezado 4</div>
        </div>

        <div className="content content-5">
          <div className="Title">Encabezado 5</div>
        </div>
      </section>
    </div>
  )
}

export default Galeria
