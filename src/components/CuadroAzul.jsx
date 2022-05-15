import React from 'react'
import styles from './CuadroAzul.css'
import Cuadro from './Cuadro.png'

function CuadroAzul() {
  return (
    <div className="General" style={styles}>
      <img className="Cuadro" src={Cuadro} alt="Cuadrito" />
    </div>
  )
}

export default CuadroAzul
