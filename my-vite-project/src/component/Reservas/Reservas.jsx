import React from 'react';
import { Link } from 'react-router-dom';  // Asegúrate de importar Link de react-router-dom
import logo from '../images/logo.png';  // Reemplaza 'ruta/a/tu/logo' con la ruta real de tu logo

const Reservas = () => {
  const numeroDeTelefono = '+54 351 509-5337';
  const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroDeTelefono}`;

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

      {/* Agregar número de teléfono y enlace de WhatsApp */}
      <div className="contacto-container">
        <p>Número de Teléfono: {numeroDeTelefono}</p>
        <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer">
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Reservas;
