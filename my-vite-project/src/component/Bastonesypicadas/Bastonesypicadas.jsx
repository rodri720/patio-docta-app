
import React from 'react';
import { Link } from 'react-router-dom';
import { photoData } from '../photoData/photoData';
import './Bastonesypicadas.css';

function Bastonesypicadas() {
  return (
    <div className="home-container">
       <Link to="/carta">VOLVER A LA CARTA</Link>
      <h1 className="title">Variedades de bastones y picadas</h1>
      

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
