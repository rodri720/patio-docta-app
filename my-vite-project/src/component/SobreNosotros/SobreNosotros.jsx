import React from 'react';
import './SobreNosotros.css';
import { Link } from 'react-router-dom';

const SobreNosotros = () => {
  return (
    <div className="about-container">
      <Link to='/'>Volver a la página de inicio</Link>
      

      <section>
      <section>
        <h2>BIENVENIDOS A PATIO DE DOCTA</h2>
        <p>
        En patio docta, creemos que la buena comida y el ambiente acogedor son ingredientes esenciales para una experiencia memorable en familia. Somos más que un simple restaurante; somos un lugar donde los amigos se convierten en familia y cada visita se convierte en una ocasión especial.
        </p>
      </section>
        <h3>NUESTRA HISTORIA</h3>
        <p>
          Desde nuestra apertura en , hemos estado sirviendo deliciosas comidas y creando recuerdos inolvidables. Inspirados en las tradiciones familiares y la pasión por la gastronomía, hemos construido un espacio donde las risas resuenan, los niños son bienvenidos y los momentos felices se comparten.
        </p>
      </section>

      <section>
        <h3>AMBIENTE CALIDO Y ACOGEDOR</h3>
        <p>
        Nuestro ambiente está diseñado para que te sientas como en casa desde el momento en que entras por la puerta. Ya sea que estés celebrando un cumpleaños, disfrutando de una cena en familia o simplemente relajándote con amigos, encontrarás un ambiente cálido y acogedor que te invita a quedarte y disfrutar.
        </p>
      </section>

      <section>
        <h3>MENU VARIEDADES PARA TODOS LOS GUSTOS</h3>
        <p>
        Nuestro menú refleja nuestra pasión por la cocina de calidad. Desde platillos clásicos que te transportarán a la infancia hasta creaciones innovadoras que deleitarán tu paladar, ofrecemos una variedad que satisface todos los gustos y edades. Además, contamos con opciones vegetarianas y para aquellos con necesidades dietéticas específicas.
        </p>
      </section>

      <section>
        <h3>COMPROMISO CON LA COMUNIDAD</h3>
        <p>
        En PATIO DE DOCTA, nos enorgullece ser parte de la comunidad. Trabajamos con proveedores locales para resaltar los sabores frescos de la región y apoyamos iniciativas comunitarias que fortalecen los lazos entre vecinos.

Únete a nosotros en patio de docta para experimentar la fusión perfecta de deliciosa comida, servicio excepcional y un ambiente familiar. Estamos aquí para hacer de cada visita una ocasión especial. ¡Esperamos verte pronto!
        </p>
      </section>

      <Link to="/navbar">Volver a la Barra de Navegación</Link>
    </div>
  );
}

export default SobreNosotros;