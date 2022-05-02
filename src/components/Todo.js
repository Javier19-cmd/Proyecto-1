//  Javir Valle
//  Carnet: 20159
//  Copiando sitio web.
//  Referencia: https://shop.samsung.com/latin/gt/
import React from 'react'
import styles from './Todo.css'
import logo from './logo.png'
import bandera from './Bandera.png'
import perfil from './Perfil.png'
import cart from './Cart.png'
import search from './search.png'
import i1 from './I1.jpg'
import i3 from './I3.jpg'
import promociones from './Promocines.png'
import cuotas from './Cuotas.jpg'
import compra from './Compra.png'
import seguridad from './Seguridad.jpg'

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
        <a className="Mobile" href="https://shop.samsung.com/latin/gt/shop/smartphones.html">Mobile</a>
        <a className="TV" href="https://shop.samsung.com/latin/gt/shop/tv-av.html">TV & AV</a>
        <a className="Electrodomesticos" href="https://shop.samsung.com/latin/gt/shop/electrodomesticos.html">Electrodomésticos</a>
        <a className="Tienda" href="https://shop.samsung.com/latin/gt/">Tienda Online</a>
        <img className="Bandera" src={bandera} alt="Bandera" />
        <p className="GTQ">GTQ</p>
        <img className="Perfil" src={perfil} alt="perfil" />
        <img className="Cart" src={cart} alt="carretilla" />
        <img className="Search" src={search} alt="buscar" />
      </div>
      {/* Franja que tiene las imágenes que se deslizan hacia un lado */}
      <div className="Franja3">
        <img className="Telefono" src={i1} alt="Teléfonos" />
        <img className="Promociones" src={promociones} alt="Promociones" />
        <h3 className="Promociones2">Promociones exclusivas con</h3>
        <h3 className="Promociones3">Garantía Local</h3>
        <a className="Promociones4" href="https://shop.samsung.com/latin/gt/faqs/category/garantia-y-servicio-tecnico">Más información acerca de la garantía</a>
        <div className="Linea1"></div>
        <img className="Cuotas" src={cuotas} alt="Cuotas" />
        <h3 className="Cuota1">Aprovecha hasta 36 cuotas sin</h3>
        <h3 className="Cuota2">interés con bancos</h3>
        <h3 className="Cuota3">seleccionados</h3>
        <a className="Cuota4" href="https://shop.samsung.com/latin/gt/comprar-es-facil#pagos">Ver más sobre pago y financiación</a>
        <div className="Linea2"></div>
        <img className="Compra" src={compra} alt="Compra" />
        <h3 className="Compra1">Compra ahora con Envío</h3>
        <h3 className="Compra2">GRATIS a tu hogar</h3>
        <a className="Entrega" href="https://shop.samsung.com/latin/gt/comprar-es-facil#envios">Conoce más acerca de la entrega</a>
        <div className="Linea3"></div>
        <img className="Seguridad" src={seguridad} alt="Seguridad" />
        <h3 className="Seguridad1">Compra tranquilo, tus datos</h3>
        <h3 className="Seguridad2">están seguros</h3>
        <a className="Seguridad3" href="https://shop.samsung.com/latin/gt/comprar-es-facil">Más información sobre seguridad</a>
        <h2 className="Novedades">Novedades del mes</h2>
      </div>
    </div>
  )
}

export default Todo
