const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Order extends Sequelize.Model {}

Order.init({

  jumlahbeli: Sequelize.INTEGER,
 
  
  
}, { sequelize, modelName: 'order' });

module.exports = Order;