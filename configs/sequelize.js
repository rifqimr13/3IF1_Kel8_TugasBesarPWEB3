const Sequelize = require('sequelize');
const sequelize = new Sequelize('if1_Kelompok8_book', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;