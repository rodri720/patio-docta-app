import React from 'react';
import { Link } from 'react-router-dom';
import './Carta.css';

function Carta() {
  return (
    <div className="home-container">
      <h1 className="title">Nuestra Carta</h1>
      
      {/* Link to Home */}
      <Link to="/">Volver a la página de inicio</Link>
      
      {/* Link to view pizzas */}
      <Link to="/pizzas">VER VARIEDADES DE PIZZAS</Link>
      
      {/* Link to view lomitos and hamburguesas */}
      <Link to="/lomoyhambur">VER VARIEDADES DE LOMITOS, HAMBURGUESAS y PANCHOS</Link>
      <Link to="/Bastonesypicadas">VER VARIEDADES DE BASTONES y PICADAS</Link>

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
