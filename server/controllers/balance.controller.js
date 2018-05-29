const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Income = mongoose.model('Income');
const User = mongoose.model('User');
const Expense = mongoose.model('Expense');

const getall=(req, res, userid) => {

};
module.exports = {
  getall: getall
};
