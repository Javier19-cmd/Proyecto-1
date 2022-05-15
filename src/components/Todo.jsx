//  Javir Valle
//  Carnet: 20159
//  Copiando sitio web.
//  Referencia: https://shop.samsung.com/latin/gt/
import React from 'react'
import styles from './Todo.css'
import Franja1 from './Franja1'
import Franja2 from './Franja2'
import Franja3 from './Franja3'
import Galeria from './Galeria'
import CuadroAzul from './CuadroAzul'
import Pie from './Pie'

function Todo() {
  return(
    <div className="Todo" style={styles}>
      <Franja1 />
      <Franja2 />
      <Franja3 />
      <Galeria />
      <CuadroAzul />
      <Pie />
    </div>
  )
}

export default Todo
