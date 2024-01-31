// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import Landing from './component/LandingPage/LandingPage';
import Carta from './component/Carta/Carta';
import Pizzas from './component/Pizzas/Pizzas';
import Detail from './component/Detail/Detail';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Lomoyhambur from './component/Lomoyhambur/Lomoyhambur';
import Bastonesypicadas from './component/Bastonesypicadas/Bastonesypicadas';
import Fritas from './component/Fritas/Fritas';
import Wrap from './component/Wrap/Wrap';
import LogoutButton from './component/Login/LogoutButton';
import Horarios from './component/Horarios/Horarios';
import Direccion from './component/Direccion/Direccion';
import Dashboard from './component/Dashboard/Dashboard';
import Eventos from './component/Eventos/Eventos';
import Reservas from './component/Reservas/Reservas';

import './App.css';

export default function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/carta" element={<Carta />} />
            <Route path="/pizzas" element={<Pizzas />} />
            <Route path="/lomoyhambur" element={<Lomoyhambur />} />
            <Route path="/bastonesypicadas" element={<Bastonesypicadas />} />
            <Route path="/fritas" element={<Fritas />} />
            <Route path="/wrap" element={<Wrap />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/about" element={<About />} />
            <Route path="/horarios" element={<Horarios />} />
            <Route path="/direccion" element={<Direccion />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/loggedout" element={<LogoutButton />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
           
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

// Agrega un componente NotFound para manejar rutas no encontradas
const NotFound = () => (
  <div>
    <h1>404 - Página no encontrada</h1>
    <p>Lo siento, la página que buscas no existe.</p>
  </div>
);
