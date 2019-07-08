const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Sales extends Sequelize.Model {}

Sales.init({
  date: Sequelize.DATE
}, { sequelize, modelName: 'sales' });

module.exports = Sales;