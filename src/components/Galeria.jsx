// Referencias: 
// Css tabs: https://www.youtube.com/watch?v=QtwXQdlvyWA&t=22s&ab_channel=CodingNepal
import React from 'react'
import styles from './Galeria.css'

function Galeria() {
  return (
    <div className="Wrapper" style={styles}>
      <header>Pure CSS Tabs</header>

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

      {/* Las imágenes que va a tener cada sección */}
      <section>
        <div className="content content-1">
          <div className="Title">Encabezado 1</div>
          <p>Lorem ipsum</p>
        </div>

        <div className="content content-2">
          <div className="Title">Encabezado 2</div>
          <p>Lorem ipsum</p>
        </div>

        <div className="content content-3">
          <div className="Title">Encabezado 3</div>
          <p>Lorem ipsum</p>
        </div>

        <div className="content content-4">
          <div className="Title">Encabezado 4</div>
          <p>Lorem ipsum</p>
        </div>

        <div className="content content-5">
          <div className="Title">Encabezado 5</div>
          <p>Lorem ipsum</p>
        </div>
      
      </section>
    </div>
  )
}

export default Galeria
