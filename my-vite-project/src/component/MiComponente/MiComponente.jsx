// MiComponente.jsx
import React from 'react';
import styles from './MiComponente.module.css'; // Importa el módulo CSS

const MiComponente = () => {
  return (
    <div className={styles.miClase}>
      Este div tiene la clase 'miClase' con el color rojo.
    </div>
  );
};

export default MiComponente;
