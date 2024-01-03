import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { photoData } from '../photoData/photoData.js';

function Carta() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Simulamos una solicitud para cargar las fotos (esto podría ser una solicitud HTTP real)
    setTimeout(() => {
      setPhotos(photoData);
      setLoading(false); // Marca la carga como completa
    }, 1000); // Espera 1 segundo antes de cargar los datos (puedes ajustar esto)
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">Nuestra Carta</h1>
      <Link to="/">Volver a la página de inicio</Link>

      <div className="spacer"></div>

      {loading ? (
        <p>Cargando fotos...</p>
      ) : (
        <div className="photo-container">
          <Link to="/pizzas">Ver Variedades de Pizzas</Link>
          {/* Aquí puedes renderizar las fotos si es necesario */}
        </div>
      )}
    </div>
  );
}

export default Carta;
