const Book = require('../models/book');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

//Autentikasi untuk menampilkan data data buku
module.exports.getIndexBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.sendStatus(403);
        } else {
            if (authData['roles'] == "admin") {
                Book.findAll()
                    .then((book) => {
                        res.json(book);
                    }).catch((error) => {
                        throw error;
                    })
            } else {
                res.sendStatus(403);
            }
        }
    });
}


//Autentikasi Menambah Data Book
module.exports.postBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.sendStatus(403);
        } else {
            if (authData['roles'] == "admin") {
                Book.create({
                    judul: req.body.judul,
                    penulis: req.body.penulis,
                    penerbit: req.body.penerbit,
                    tahun_terbit: req.body.tahun_terbit,
                    stock: req.body.stock,
                    harga: req.body.harga
                })
                    .then((book) => {
                        res.json(book);
                    })
                    .catch((error) => {
                        throw error;
                    })
            } else {
                res.sendStatus(403);
            }
        }
    });
}


//Autentikasi untuk merubah data Book
module.exports.putBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.sendStatus(403);
        } else {
            if (authData['roles'] == "admin") {
                Book.update({
                    judul: req.body.judul,
                    penulis: req.body.penulis,
                    penerbit: req.body.penerbit,
                    tahun_terbit: req.body.tahun_terbit,
                    stock: req.body.stock,
                    harga: req.body.harga
                }, {
                        where: {
                            id: req.params.id
                        }
                    }).then((book) => {
                        res.json(book);
                    }).catch((error) => {
                        throw error;
                    })
            } else {
                res.sendStatus(403);
            }
        }
    })
}


//Autentikasi untuk menghapus data book
module.exports.deleteBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.sendStatus(403);
        } else {
            if (authData['roles'] == "admin") {
                Book.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                    .then(function (deletedRecord) {
                        if (deletedRecord === 1) {
                            res.status(200).json({ message: "Deleted Successfully" });
                        }
                        else {
                            res.status(404).json({ message: "Record Not Found" })
                        }
                    })
                    .catch(function (error) {
                        res.status(500).json(error);
                    });
            } else {
                res.sendStatus(403);
            }
        }
    })
}