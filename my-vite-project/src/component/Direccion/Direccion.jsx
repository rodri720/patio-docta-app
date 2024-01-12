// src/components/Direccion.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Direccion.css';
import logo from '../images/logo.png';

const Direccion = () => {
  const latitud = -31.45951621272951; // Reemplaza con la latitud real
  const longitud = -64.30751136629596; // Reemplaza con la longitud real

  const googleMapsURL = `https://www.google.com/maps?q=${latitud},${longitud}&hl=es`;

  return (
    <div className="direccion-container">
      <Link to="/" className="link-to-home">
        VOLVER AL INICIO
      </Link>
      <div className="logo">
        <img src={logo} alt="logo" width={'150px'} height={'150px'} />
      </div>
      <h2 className="direccion-title">DIRECCION</h2>
      <p className="direccion-text">Espacio Ravello - Mza 23 - Urbanización Docta</p>
      <a href={googleMapsURL} target="_blank" rel="noopener noreferrer" className="google-maps-link">
        Ver en Google Maps
      </a>
    </div>
  );
};

export default Direccion;
