
import React from 'react';
import { Link } from 'react-router-dom';
import { photoData } from '../photoData/photoData';
import './Bastonesypicadas.css';

function Bastonesypicadas() {
  return (
    <div className="home-container">
      <h1 className="title">Variedades de bastones y picadas</h1>
      <Link to="/carta">Volver a la Carta</Link>

      <div className="spacer"></div>

      <div className="photo-container">
        {photoData
          .filter((photo) => photo.category === 'bastonesypicadas')
          .map((photo) => (
            <Link to={`/detail/${photo.id}`} key={photo.id} className="photo-item">
              <img src={photo.image} alt={photo.comment} className="photo" />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default  Bastonesypicadas;
