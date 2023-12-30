import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './component/LandingPage/LandingPage';

import Menu from './component/Menu/Menu';
import Detail from './component/Detail/Detail';
import Footer from './component/Footer/Footer';
import About from './component/About/About';

import './App.css';



export default function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
        
        </Routes>
        
      </div>
      </Router>
    
  );
}