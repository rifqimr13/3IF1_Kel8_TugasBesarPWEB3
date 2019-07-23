const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

const indexRouter = require('./routes');

app.use(indexRouter);

app.listen(3108, () => {
    console.log('server started');
})