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
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      resolution: {
        type: DataTypes.STRING,
      },
      memory: {
        type: DataTypes.STRING,
      },
      processor: {
        type: DataTypes.STRING,
      },
    },
    {
      // Otros parámetros y configuraciones del modelo si es necesario

      // Especifica el nombre de la base de datos
      tableName: "products", // Cambia "products" al nombre real de la tabla si es diferente

      // Especifica la base de datos a la que pertenece
      sequelize,
    }
  );
};
