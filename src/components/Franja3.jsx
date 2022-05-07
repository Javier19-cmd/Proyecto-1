import React from 'react'
import styles from './Franja3.css'
import promociones from './Promocines.png'
import cuotas from './Cuotas.jpg'
import compra from './Compra.png'
import seguridad from './Seguridad.jpg'

function Franja3() {
  return (
    <div className="Framja3" style={styles}>
      <img className="Promociones" src={promociones} alt="Promociones" />
      <h3 className="Promociones2">Promociones exclusivas con</h3>
      <h3 className="Promociones3">Garantía Local</h3>
      <a className="Promociones4" href="https://shop.samsung.com/latin/gt/faqs/category/garantia-y-servicio-tecnico">Más información acerca de la garantía</a>
      <div className="Linea1" />
      <img className="Cuotas" src={cuotas} alt="Cuotas" />
      <h3 className="Cuota1">Aprovecha hasta 36 cuotas sin</h3>
      <h3 className="Cuota2">interés con bancos</h3>
      <h3 className="Cuota3">seleccionados</h3>
      <a className="Cuota4" href="https://shop.samsung.com/latin/gt/comprar-es-facil#pagos">Ver más sobre pago y financiación</a>
      <div className="Linea2" />
      <img className="Compra" src={compra} alt="Compra" />
      <h3 className="Compra1">Compra ahora con Envío</h3>
      <h3 className="Compra2">GRATIS a tu hogar</h3>
      <a className="Entrega" href="https://shop.samsung.com/latin/gt/comprar-es-facil#envios">Conoce más acerca de la entrega</a>
      <div className="Linea3" />
      <img className="Seguridad" src={seguridad} alt="Seguridad" />
      <h3 className="Seguridad1">Compra tranquilo, tus datos</h3>
      <h3 className="Seguridad2">están seguros</h3>
      <a className="Seguridad3" href="https://shop.samsung.com/latin/gt/comprar-es-facil">Más información sobre seguridad</a>
      <h2 className="Novedades">Novedades del mes</h2>
    </div>
  )
}

export default Franja3
