import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import './Carta.css';

function Carta() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseOver = (link) => {
    setHoveredLink(link);
  };

  const handleMouseOut = () => {
    setHoveredLink(null);
  };

  return (
    <div className="home-container">
      <div className="logo">
        <img src={logo} alt="logo" width={'150px'} height={'150px'} />
      </div>
      <h1 className="title">NUESTRA CARTA</h1>

      {/* Link to Home */}
      <NavLink
        exact
        to="/"
        style={{ color: hoveredLink === '/' ? '#ff6600' : 'inherit', textDecoration: 'underline' }}
        onMouseOver={() => handleMouseOver('/')}
        onMouseOut={handleMouseOut}
      >
        VOLVER A LA PAGINA DE INICIO
      </NavLink>

      {/* Link to view pizzas */}
      <NavLink
        to="/pizzas"
        style={{ color: hoveredLink === '/pizzas' ? '#ff6600' : 'inherit', textDecoration: 'underline' }}
        onMouseOver={() => handleMouseOver('/pizzas')}
        onMouseOut={handleMouseOut}
      >
        VER VARIEDADES DE PIZZAS
      </NavLink>

      {/* Link to view lomos y hamburguesas */}
      <NavLink
        to="/lomoyhambur"
        style={{ color: hoveredLink === '/lomoyhambur' ? '#ff6600' : 'inherit', textDecoration: 'underline' }}
        onMouseOver={() => handleMouseOver('/lomoyhambur')}
        onMouseOut={handleMouseOut}
      >
        VER VARIEDADES DE LOMITOS, HAMBURGUESAS y PANCHOS
      </NavLink>

      {/* Link to view bastones y picadas */}
      <NavLink
        to="/Bastonesypicadas"
        style={{ color: hoveredLink === '/Bastonesypicadas' ? '#ff6600' : 'inherit', textDecoration: 'underline' }}
        onMouseOver={() => handleMouseOver('/Bastonesypicadas')}
        onMouseOut={handleMouseOut}
      >
        VER VARIEDADES DE BASTONES y PICADAS
      </NavLink>

      {/* Link to view papas fritas, empanadas y milanesas */}
      <NavLink
        to="/Fritas"
        style={{ color: hoveredLink === '/Fritas' ? '#ff6600' : 'inherit', textDecoration: 'underline' }}
        onMouseOver={() => handleMouseOver('/Fritas')}
        onMouseOut={handleMouseOut}
      >
        VARIEDADES EN PAPAS FRITAS EMPANADAS Y MILANESAS
      </NavLink>

      {/* Link to view wraps y calzonis */}
      <NavLink
        to="/Wrap"
        style={{ color: hoveredLink === '/Wrap' ? '#ff6600' : 'inherit', textDecoration: 'underline' }}
        onMouseOver={() => handleMouseOver('/Wrap')}
        onMouseOut={handleMouseOut}
      >
        VARIEDADES EN WRAP Y CALZONIS
      </NavLink>

      <div className="spacer"></div>
    </div>
  );
}

export default Carta;
