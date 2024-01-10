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
      <h1 className="title">VARIEDADES DE PIZZAS</h1>
      <Link to="/carta">VOLVER A LA CARTA</Link>

      <div className="spacer"></div>

      {loading ? (
        <p>Cargando fotos...</p>
      ) : (
        <div className="photo-container">
          {/* Dividir las fotos en cuatro columnas */}
          <div className="column">
            {photos
              .filter((photo) => photo.category === 'pizzas')
              .slice(0, 2) // Primer grupo de dos fotos
              .map((photo) => (
                <Link to={`/detail/${photo.id}`} key={photo.id} className="photo-item">
                  <img src={photo.image} alt={photo.comment} className="photo" />
                </Link>
              ))}
          </div>
          <div className="column">
            {photos
              .filter((photo) => photo.category === 'pizzas')
              .slice(2, 4) // Segundo grupo de dos fotos
              .map((photo) => (
                <Link to={`/detail/${photo.id}`} key={photo.id} className="photo-item">
                  <img src={photo.image} alt={photo.comment} className="photo" />
                </Link>
              ))}
          </div>
          <div className="column">
            {photos
              .filter((photo) => photo.category === 'pizzas')
              .slice(4, 6) // Tercer grupo de dos fotos
              .map((photo) => (
                <Link to={`/detail/${photo.id}`} key={photo.id} className="photo-item">
                  <img src={photo.image} alt={photo.comment} className="photo" />
                </Link>
              ))}
          </div>
          <div className="column">
            {photos
              .filter((photo) => photo.category === 'pizzas')
              .slice(6, 8) // Cuarto grupo de dos fotos
              .map((photo) => (
                <Link to={`/detail/${photo.id}`} key={photo.id} className="photo-item">
                  <img src={photo.image} alt={photo.comment} className="photo" />
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Pizzas;
