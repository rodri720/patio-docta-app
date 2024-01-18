// BulkCreateForm.jsx
import React, { useState } from 'react';
import './BulkCreateForm.css';
const BulkCreateForm = ({ onBulkCreate }) => {
  const [productName, setProductName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones y lógica adicional según sea necesario
    const formData = { productName }; // Agrega más campos según sea necesario
    onBulkCreate(formData);
  };

  return (
    <div id="bulkCreateFormContainer">
      <h2>Bulk Create Products</h2>
      <form id="bulkCreateForm" onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        {/* Agrega más campos según sea necesario */}
        <button type="submit">Bulk Create</button>
      </form>
    </div>
  );
};

export default BulkCreateForm;
