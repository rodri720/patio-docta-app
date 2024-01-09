// Lomoyhambur.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { photoData } from '../photoData/photoData';
import './Lomoyhambur.css';

function Lomoyhambur() {
  return (
    <div className="home-container">
      <Link to="/carta">VOLVER A LA CARTA</Link>
      <h1 className="title">VARIEDADES EN LOMOS HAMBURGUESAS PANCHOS Y TOSTADO</h1>
      

      <div className="spacer"></div>

      <div className="photo-container">
        {photoData
          .filter((photo) => photo.category === 'lomohamburguesa')
          .map((photo) => (
            <Link to={`/detail/${photo.id}`} key={photo.id} className="photo-item">
              <img src={photo.image} alt={photo.comment} className="photo" />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Lomoyhambur;
