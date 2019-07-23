const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Session extends Sequelize.Model {}
Session.init({
		
}, { sequelize, modelName: 'session' });

module.exports = Session;