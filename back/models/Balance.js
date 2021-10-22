const { DataTypes, Sequelize } = require('sequelize');

// DB Model export and injection to Sequelize
module.exports = (sequelize) => {
  // Model Definition
  sequelize.define('balance', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    funds: {
      type: DataTypes.FLOAT,
      defaultValue: 0.00,
      allowNull: false,
    },
    /* EXTRA:
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true, //OJO ACÁ, CAMBIAR LA PK DE ID POR ESTA PK
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    first_name: {
        type: DataTypes.STRING,
        defaultValue: 'Usuario',
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true,
    }, */
  });
};