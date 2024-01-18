const express = require('express');
const router = express.Router();
const { bulkCreateProducts } = require('../controllers/productController'); // Corregido el nombre del controlador

router.post('/bulkCreateProducts', bulkCreateProducts);

module.exports = router;
