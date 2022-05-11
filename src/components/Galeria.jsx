import React from 'react'
import styles from './Galeria.css'

function Galeria() {
  return (
    <div className="Wrapper" style={styles}>
      <header>Pure CSS Tabs</header>

      <input type="radio" name="slider" id="productos" checked />
      <input type="radio" name="slider" id="smartphones" />
      <input type="radio" name="slider" id="tablets" />
      <input type="radio" name="slider" id="TV" />
      <input type="radio" name="slider" id="Elec" />
      
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
        <div className="slider"></div>
      </nav>
    </div>
  )
}

export default Galeria
