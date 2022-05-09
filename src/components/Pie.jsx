import React from 'react'
import styles from './Pie.css'

function Pie() {
  return (
    <div className="Pie_Pagina" styles={styles}>
      <footer className="Foot">
        
        {/*Pie de la página*/}
        <div className="Copy">
          <p>Copyright © 1995-2020 SAMSUNG. Todos los drechos reservado</p>
        </div>
        <div className="Ayuda">
          <a href="https://www.samsung.com/latin/accessibility/overview/?_ga=2.195229608.503100336.1605699783-1958430373.1605699783">Ayuda para accesibilidad</a>
        </div>
        <div className="Privacidad">
          <a href="https://www.samsung.com/latin/info/privacy/?_ga=2.195229608.503100336.1605699783-1958430373.1605699783">Privacidad</a>
        </div>
        <div className="Legal">
          <a href="https://www.samsung.com/latin/info/legal/?_ga=2.195229608.503100336.1605699783-1958430373.1605699783">Legal</a>
        </div>

        <div className="Secciones">
          <p className="Sec">Otras secciones</p>
          <a className="Conocenos" href="https://www.samsung.com/latin/about-us/company-info/">Conócenos</a>
          <a className="Soporte" href="https://www.samsung.com/latin/support/">Soporte</a>
          <a className="Ventas" href="https://shop.samsung.com/latin/gt/b2b?___from_store=pa">Ventas a Empresas - B2B</a>
        </div>

        <div className="Soporte">
          <p className="Necesitas">¿Necesitas soporte?</p>
          <a className="Telefonico" href="https://shop.samsung.com/latin/gt/faqs">Soporte telefónico</a>
          <p className="Mail">Soporte vía eMail</p>
          <a className="Preguntas" href="https://shop.samsung.com/latin/gt/faqs">Preguntas frecuentes</a>
        </div>
      </footer>
    </div>
  )
}

export default Pie
