// Pizzas.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { photoData } from '../photoData/photoData.js';
import './Pizzas.css';

function Pizzas() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPhotos(photoData);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar las fotos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">Variedades de Pizzas</h1>
      <Link to="/carta">Volver a la Carta</Link>

      <div className="spacer"></div>

      {loading ? (
        <p>Cargando fotos...</p>
      ) : (
        <div className="photo-container">
          {/* Renderiza las fotos de pizzas si están disponibles */}
          {photos
            .filter((photo) => photo.category === 'pizzas')
            .map((photo) => (
              <Link to={`/detail/${photo.id}`} key={photo.id} className="photo-item">
                <img src={photo.image} alt={photo.comment} className="photo" />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}

export default Pizzas;
