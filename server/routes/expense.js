const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Expense = mongoose.model('Expense');
const expenseController = require('../controllers/expense.controller');
const config = require('../../config');



router.get('/:id', function (req, res) {
  expenseController.getall(req, res, req.params.id);

});
router.post('/', function (req, res) {
  expenseController.create(req, res, req.body.category, req.body.amount, req.body.user_id, req.body.comment, req.body.date);

});
router.put('/:id', function (req, res) {
  expenseController.update(req, res, req.params.user_id, req.body)
});
router.delete('/', function (req, res) {
  expenseController.remove(req, res, req.body.user_id);
});
module.exports = router;
