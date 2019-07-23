const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_book', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;