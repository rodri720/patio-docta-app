// src/components/Horarios.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Horarios.css'; // Importa el archivo CSS

const Horarios = () => {
  return (
    <div className="horarios-container">
      <Link to="/" className="link-to-home">
        VOLVER AL INICIO
      </Link>
      <div className="logo">
        <img src={logo} alt="logo" width={'150px'} height={'150px'} />
      </div>
      <h2 className="horarios-title">Horarios</h2>
      <p className="horarios-text">Jueves a Sábados: 18:00 a 23:00</p>
    </div>
  );
};

export default Horarios;
