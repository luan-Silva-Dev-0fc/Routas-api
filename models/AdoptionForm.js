const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const AdoptionForm = sequelize.define('AdoptionForm', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  telefone: { type: DataTypes.STRING, allowNull: false },
  cidade_estado: { type: DataTypes.STRING, allowNull: false },
  motivo: { type: DataTypes.TEXT, allowNull: false },
  ambiente: { type: DataTypes.TEXT, allowNull: false },
})

module.exports = AdoptionForm
