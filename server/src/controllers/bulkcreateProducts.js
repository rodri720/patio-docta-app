const { Product } = require('../models');

const bulkCreateProducts = async (req, res) => {
  try {
    // Asegúrate de validar la autenticación y autorización antes de llegar aquí

    // Obtén la lista de productos a crear desde el cuerpo de la solicitud
    const productosParaCrear = req.body;

    // Utiliza Sequelize para realizar la operación de bulkCreate
    const productosCreados = await Product.bulkCreate(productosParaCrear);

    res.status(201).json({ message: 'Productos creados exitosamente', productos: productosCreados });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear productos' });
  }
};

module.exports = {
  bulkCreateProducts,
};
