const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Income = mongoose.model('Income');
const User = mongoose.model('User');
const Expense = mongoose.model('Expense');

getall((req, res, userid) => {
  Income.find({'userId': userid,})
});
