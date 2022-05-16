import React from 'react'
import styles from './Pie.css'
import facebook from './facebook.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import youtube from './youtube.png'
import twitter from './twitter.png'

function Pie() {
  return (
    <div className="Pie_Pagina" styles={styles}>
      <footer className="Foot">
        {/* Pie de la página */}
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

        {/* Secciones de la página */}
        <div className="Secciones">
          <p className="Sec">Otras secciones</p>
          <a className="Conocenos" href="https://www.samsung.com/latin/about-us/company-info/">Conócenos</a>
          <a className="Sopo" href="https://www.samsung.com/latin/support/">Soporte</a>
          <a className="Ventas" href="https://shop.samsung.com/latin/gt/b2b?___from_store=pa">Ventas a Empresas - B2B</a>
        </div>

        {/* Apartado del soporte técnico */}
        <div className="Soporte">
          <p className="Necesitas">¿Necesitas soporte?</p>
          <a className="Telefonico" href="https://shop.samsung.com/latin/gt/faqs">Soporte telefónico</a>
          <p className="Mail">Soporte vía eMail</p>
          <a className="Preguntas" href="https://shop.samsung.com/latin/gt/faqs">Preguntas frecuentes</a>
        </div>

        {/* Sitios oficiales de cada país */}
        <div className="Sitios">
          <p className="Oficiales">Sitios Oficiales</p>
          <a className="Costa-Rica" href="https://www.samsung.com/latin/microsite/costa-rica/">Samsung Costa Rica</a>
          <a className="Ecuador" href="https://www.samsung.com/latin/microsite/ecuador/">Samsung Ecuador</a>
          <a className="El-Salvador" href="https://www.samsung.com/latin/microsite/el-salvador/">Samsung El Salvador</a>
          <a className="Guatemala" href="https://www.samsung.com/latin/microsite/guatemala/">Samsung Guatemala</a>
          <a className="Honduras" href="https://www.samsung.com/latin/microsite/honduras/">Samsung Honduras</a>
          <a className="Nicaragua" href="https://www.samsung.com/latin/microsite/nicaragua/">Samsung Nicaragua</a>
          <a className="Panama" href="https://www.samsung.com/latin/microsite/panama/">Samsung Panamá</a>
          <a className="Republica-Dominicana" href="https://www.samsung.com/latin/microsite/republica-dominicana/">República Dominicana</a>
          <a className="Venzuela" href="https://www.samsung.com/latin/microsite/venezuela/">Venezuela</a>
        </div>

        {/* Íconos de las redes sociales */}

        <div className="Redes">
          <p className="Redes-Sociales">Redes Sociales</p>
          <img className="Face" src={facebook} alt="Facebook" />
          <img className="Twi" src={twitter} alt="Twitter" />
          <img className="Insta" src={instagram} alt="Instagram" />
          <img className="You" src={youtube} alt="YouTube" />
          <img className="Linke" src={linkedin} alt="Linkedlin" />
        </div>
      </footer>
    </div>
  )
}

export default Pie
