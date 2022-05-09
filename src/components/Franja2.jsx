// Hacer un menú de navegación desplegable: https://www.youtube.com/watch?v=HM1lb5t6eNU&list=PLE9dKsjFKblJymWQGoBYINColZgOCcTJk&index=3&ab_channel=DaniCodex
import React from 'react'
import styles from './Franja2.css'
import logo from './logo.png'
import bandera from './Bandera.png'
import perfil from './Perfil.png'
import cart from './Cart.png'
import search from './search.png'

function Franja2() {
  return (
    <div className="Franja2" style={styles}>
      <img className="Logo" src={logo} alt="logo" />
      <a className="Mobile" href="https://shop.samsung.com/latin/gt/shop/smartphones.html">
        Mobile
        <ul className="ul-second">
          <li className="Smartphones">Smartphones</li>
          <li className="Tablets">Tablets</li>
          <li className="Wearables">Wearables</li>
          <li className="Accesorios">Accesorios</li>
        </ul>
      </a>
      <a className="TV" href="https://shop.samsung.com/latin/gt/shop/tv-av.html">TV & AV</a>
      <a className="Electrodomesticos" href="https://shop.samsung.com/latin/gt/shop/electrodomesticos.html">Electrodomésticos</a>
      <a className="Tienda" href="https://shop.samsung.com/latin/gt/">Tienda Online</a>
      <img className="Bandera" src={bandera} alt="Bandera" />
      <p className="GTQ">GTQ</p>
      <img className="Perfil" src={perfil} alt="perfil" />
      <img className="Cart" src={cart} alt="carretilla" />
      <img className="Search" src={search} alt="buscar" />
    </div>
  )
}

export default Franja2
