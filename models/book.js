const Sequelize = require('sequelize');
const sequelize = require('../configs/sequelize');

class Book extends Sequelize.Model { }

Book.init({
    judul: Sequelize.STRING,
    penulis: Sequelize.STRING,
    penerbit: Sequelize.STRING,
    tahun_terbit: Sequelize.INTEGER,
    stock: Sequelize.INTEGER,
    harga: Sequelize.INTEGER
}, {
        sequelize, modelName: 'book'
    });

module.exports = Book;