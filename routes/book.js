const express = require('express');
const auth = require('../configs/auth');
const router = express.Router();
const bookController = require('../controllers/book');

//Router Admin
router.get('/', auth.verifyToken, bookController.getIndexBook);
router.post('/add', auth.verifyToken, bookController.postBook);
router.put('/edit/:id', auth.verifyToken, bookController.putBook);
router.delete('/delete/:id', auth.verifyToken, bookController.deleteBook);

//Router User
router.get('/all', bookController.FindAll);
router.get('/:judul', bookController.FindJudul);

module.exports = router;