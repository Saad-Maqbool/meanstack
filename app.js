// const express = require('express');
// const path = require('path');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const http = require('http');
// const logger = require('morgan');
// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/expense")
// require('./server/Models/Users');
// require('./server/Models/Income');
// const usersRouter = require('./server/routes/users');
// const incomeRouter = require('./server/routes/income');
//
// const app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'dist'));
// app.set('view engine', 'ejs');
// app.use('/users', usersRouter);
// app.use('/income', incomeRouter);
// app.use(logger('dev'));
// app.use(session({
//   secret: 'Super duper secret'
// }));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(cookieParser());
//
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/mean-app/index.html'));
// });
// const port = process.env.PORT || '4000';
// app.set('port', port);
// const server = http.createServer(app);
// app.listen(port, () => console.log(`API running on localhost:${port}`));
//
//
//
//
// // catch 404 and forward to error handler
// // error handler
// app.use(function (req, res, next) {
//
// });
// module.exports = app;
const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
 const mongoose = require('mongoose');
 mongoose.connect("mongodb://localhost/expense")
 require('./server/Models/Users');
 require('./server/Models/Income');

const userRouter = require('./server/routes/users');
const incomeRouter = require('./server/routes/income');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'dist/mean-app')));

// Set our api routes
app.use('/users', userRouter);
app.use('/income', incomeRouter);
app.use(logger('dev'));
app.use(session({
   secret: 'Super duper secret'
 }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/mean-app/index.html'));
});



const port = process.env.PORT || '4000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
