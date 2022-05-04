import React from 'react'
import styles from './Franja1.css'

function Franja1() {
  return (
    <div className="Franja1" style={styles}>
      <div className="Movimiento">
        {/* Texto inicial de la franja */}
        <h1 className="Inicial">Compra ahora con ENVÍO GRATIS</h1>
        {/* Texto de en medio de la franja */}
        <h1 className="Medio">Hasta 36 cuotas con bancos seleccionados</h1>
        {/* Texto final de la franja */}
        <h1 className="Final">Nuevos Galaxy S22|S22+ Ultra le darán un toque épico a tu vida</h1>
      </div>
    </div>
  )
}

export default Franja1
