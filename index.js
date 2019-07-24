const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

const sequelize = require('./configs/sequelize');

//ROUTER
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const bookRouter = require('./routes/book');
const orderRouter = require('./routes/order');

//MODELS
const User = require('./models/User');
const Book = require('./models/Book');
const Session = require('./models/Session');
const Order = require('./models/Order');

app.use(indexRouter);
app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/order', orderRouter);

//Asosiasi database
Session.hasMany(Order);
Session.belongsTo(User);
Order.belongsTo(Book);

app.listen(3108, () => {
    console.log('server started');
    sequelize.sync();
});