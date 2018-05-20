const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/expense")
require('./server/Models/Users');
require('./server/Models/Income');
const usersRouter = require('./server/routes/users');
const incomeRouter = require('./server/routes/income');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(session({
  secret: 'Super duper secret'
}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/income', incomeRouter);

// catch 404 and forward to error handler


// error handler
app.use(function (req, res, next) {

});
module.exports = app;
