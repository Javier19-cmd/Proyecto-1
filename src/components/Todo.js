//  Javir Valle
//  Carnet: 20159
//  Copiando sitio web.
//  Referencia: https://shop.samsung.com/latin/gt/
import React from 'react'
import styles from './Todo.css'
import logo from './logo.png'

function Todo() {
  return (
    <div className="Todo" style={styles}>
      {/* Div que tiene la franja celeste de hasta arriba de la página */}
      <div className="Franja1">
        <div className="Movimiento">
          {/* Texto inicial de la franja */}
          <h1 className="Inicial">Compra ahora con ENVÍO GRATIS</h1>
          {/* Texto de en medio de la franja */}
          <h1 className="Medio">Hasta 36 cuotas con bancos seleccionados</h1>
          {/* Texto final de la franja */}
          <h1 className="Final">Nuevos Galaxy S22|S22+ Ultra le darán un toque épico a tu vida</h1>
        </div>
      </div>
      {/* Franja que tiene la imagen de Samsung */}
      <div className="Franja2">
        <img className="Logo" src={logo} alt="logo" />
        <a className="Mobile">Mobile</a>
        <a className="TV">TV & AV</a>
        <a className="Electrodomesticos">Electrodomésticos</a>
        <a className="Tienda">Tienda Online</a>
      </div>
    </div>
  )
}

export default Todo
