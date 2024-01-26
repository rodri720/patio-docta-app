import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from '../images/logo.png';
import encuentrosImage from '../images/encuentros.png';
import pintaImage from '../images/pinta.png';
import mojitoImage from '../images/mojito.png';
import './Eventos.css';  // Importar los estilos CSS

const Eventos = () => {
  return (
    <div>
      <div className="direccion-container">
        <Link to="/" className="link-to-home">
          VOLVER AL INICIO
        </Link>
        <div className="logo">
          <img src={logo} alt="logo" width={'150px'} height={'150px'} />
        </div>
      </div>

      <Carousel>
        <div>
          <img src={encuentrosImage} alt="Encuentros" className="carousel-image" />
        </div>
        <div>
          <img src={pintaImage} alt="Pinta" className="carousel-image" />
        </div>
        <div>
          <img src={mojitoImage} alt="Mojito" className="carousel-image" />
        </div>
      </Carousel>
    </div>
  );
}

export default Eventos;
