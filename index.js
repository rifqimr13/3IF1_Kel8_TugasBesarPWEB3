const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

const sequelize = require('./configs/sequelize');

//ROUTER
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

//MODELS
const User = require('./models/User');

app.use(indexRouter);
app.use('/user', userRouter);

app.listen(3108, () => {
    console.log('server started');
    sequelize.sync();
});