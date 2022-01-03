const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const datosRouter = require('./routes/datos');

app.listen(port, () => {
    console.log(`Servidor corriendo ${port}`);
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(cookieParser());
app.use(session({
    secret:"validatorDG",
    resave:false,
    saveUninitialized:false
} ))

app.use('/', indexRouter);
app.use('/', datosRouter);