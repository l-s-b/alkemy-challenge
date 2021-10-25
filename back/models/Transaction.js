const { DataTypes, Sequelize } = require('sequelize');

// DB Model export and injection to Sequelize
module.exports = (sequelize) => {
  // Model Definition
  sequelize.define('transaction', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    item: { // Concepto
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: { // Monto
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    date: { // YYYY-MM-DD
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: { // Ingreso/Egreso
        type: DataTypes.ENUM('INFLOW', 'OUTFLOW'),
        allowNull: false,
    },
    accountId: { // Relación a Balance
      type: DataTypes.INTEGER,
      defaultValue: 1,
  },
    category: {
        type: DataTypes.ENUM(
            'Healthcare', 'Food', 'Clothing', 'Transportation', 'Shares', 'Donations',
            'Entertainment', 'Services', 'Rent', 'Supplies', 'Salary', 'Other'),
        allowNull: true,
    },
  });
}