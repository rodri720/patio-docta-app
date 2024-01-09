// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Landing from './component/LandingPage/LandingPage';
import Carta from './component/Carta/Carta';
import Pizzas from './component/Pizzas/Pizzas'; // Asegúrate de importar Pizzas
import Detail from './component/Detail/Detail';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Lomoyhambur from './component/Lomoyhambur/Lomoyhambur';
import Bastonesypicadas from './component/Bastonesypicadas/Bastonesypicadas';
import Fritas from './component/Fritas/Fritas';
import Wrap from './component/Wrap/Wrap';

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
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}
