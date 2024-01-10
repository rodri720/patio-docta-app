const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING, // Puedes usar esta columna para especificar la categoría del producto (pizzas, lomos, etc.)
      },
      description: {
        type: DataTypes.TEXT, // Cambiado a TEXT para descripciones más largas
      },
      price: {
        type: DataTypes.FLOAT, // Cambiado a FLOAT para manejar valores decimales de precios
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING, // Cambiado a imageUrl para representar la URL de la imagen del producto
      },
    },
    {
      // Otros parámetros y configuraciones del modelo si es necesario
    }
  );
};
