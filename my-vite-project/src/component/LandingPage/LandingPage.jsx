import React from 'react';
import Inicio from '../Inicio/Inicio';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
export default function LandingPage() {
    return (
      <div>
        <Inicio />
        <Navbar />
        <Carousel />
        <Footer />
      </div>
    );
  }