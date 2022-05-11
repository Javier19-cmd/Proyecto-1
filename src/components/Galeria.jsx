import React from 'react'
import styles from './Galeria.css'

function Galeria() {
  return (
    <div className="Wrapper" style={styles}>
      <header>Pure CSS Tabs</header>
      <nav>
        <label htmlFor="" className="home"> <i className="Destacados">Productos Destacados</i> </label>
        <label htmlFor="" className="home"> <i className="Smartphones">Smartphones</i> </label>
        <label htmlFor="" className="home"> <i className="Tablets">Tablets & Wearebles</i> </label>
        <label htmlFor="" className="home"> <i className="Av">Tv & Av</i> </label>
        <label htmlFor="" className="home"> <i className="Electrodos">Electrodomésticos</i> </label>
      </nav>
    </div>
  )
}

export default Galeria
