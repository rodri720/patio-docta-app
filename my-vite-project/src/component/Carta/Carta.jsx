import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Carta.css';

function Carta() {
  return (
    <div className="home-container">
      <div className="logo">
        <img src={logo} alt="logo" width={'150px'} height={'150px'} />
      </div>
      <h1 className="title">NUESTRA CARTA</h1>
      
      {/* Link to Home */}
      <Link to="/">VOLVER A LA PAGINA DE INICIO</Link>
      
      {/* Link to view pizzas */}
      <Link to="/pizzas">VER VARIEDADES DE PIZZAS</Link>
      <Link to="/lomoyhambur">VER VARIEDADES DE LOMITOS, HAMBURGUESAS y PANCHOS</Link>
      <Link to="/Bastonesypicadas">VER VARIEDADES DE BASTONES y PICADAS</Link>
      <Link to="/Fritas">VARIEDADES EN PAPAS FRITAS EMPANADAS Y MILANESAS</Link>
      <Link to="/Wrap">VARIEDADES EN WRAP Y CALZONIS</Link>

      <div className="spacer"></div>

      {/* Render the photos or details based on the route */}
      {/* Use <Route> and <Switch> to render components based on the route */}
      {/* For example: */}
      {/* <Route path="/pizzas" component={Pizzas} /> */}
      {/* <Route path="/lomoyhambur" component={Lomoyhambur} /> */}
      {/* <Route path="/detail/:id" component={Detail} /> */}
    </div>
  );
}

export default Carta;
