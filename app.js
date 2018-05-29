const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
//mongoose.connect('mongodb://localhost/expense');
require('./server/models/Users');
require('./server/models/Income');
require('./server/models/Expense');
const userRouter = require('./server/routes/users');
const incomeRouter = require('./server/routes/income');
const expenseRouter = require('./server/routes/expense');
const balanceRouter = require('./server/routes/balance');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, 'dist/mean-app')));

app.use('/users', userRouter);
app.use('/income', incomeRouter);
app.use('/expense', expenseRouter);
app.use('/balance', balanceRouter);
app.use(logger('dev'));
app.use(session({
  secret: 'Super duper secret'
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/mean-app/index.html'));
});


const port = process.env.PORT || '5200';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
