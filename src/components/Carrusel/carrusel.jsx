// Hacer un carrusel en HTML: https://www.youtube.com/results?search_query=como+hacer+un+carrusel+automatico+de+6+imagenes+en+html+y+css+
import React from 'react'
import styles from './carrusel.css'
import Uno from './I1.jpg'
import Dos from './I2.jpg'
import Tres from './I3.jpg'
import Cuatro from './I4.jpg'
import Cinco from './I5.jpg'
import Seis from './I6.jpg'

export default function carrusel() {
  return (
    <div className="slider" styles={styles}>
      <ul>
       {/*Primera imagen*/}
        <li>
          <img src={Uno} alt="Imagen" />
        </li>
        {/*Segunda imagen*/}
        <li>
          <img src={Dos} alt="Imagen" />
        </li>

        {/*Tercera imagen*/}
        <li>
          <img src={Tres} alt="Imagen" />
        </li>

        {/*Cuarta imagen*/}
        <li>
          <img src={Cuatro} alt="Imagen" />
        </li>

        {/*Quinta imagen*/}
        <li>
          <img src={Cinco} alt="Imagen" />
        </li>

        {/*Sexta imagen*/}
        <li>
          <img src={Seis} alt="Imagen" />
        </li>
      </ul>
    </div>
  )
}
