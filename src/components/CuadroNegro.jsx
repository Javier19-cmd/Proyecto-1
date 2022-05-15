import React from 'react'
import styles from './CuadroNegro.css'
import Cuadro from './Imagen23.png'
function CuadroNegro() {
    return (
      <div className="Gene" style={styles}>
        <img className="Cuadrito" src={Cuadro} alt="Cuadro"/>
      </div>
    )
}

export default CuadroNegro
