const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

const homeRouter = require('./routes/home');
const productRouter = require('./routes/product');

const sequelize = require('./configs/sequelize');

const Product = require('./models/product');
const Sales = require('./models/sales');
const SalesProduct = require('./models/sales_product');

// Associations between Models
Sales.hasMany(SalesProduct);
SalesProduct.belongsTo(Product);

app.use(homeRouter);
app.use('/product', productRouter);

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})