const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Income = mongoose.model('Income');
const incomeController = require('../Controllers/income.controller');
const config = require('../../config');

router.use('/', function (req, res, next) {

  jwt.verify(req.query.token, config.secret, function (err, decode) {
    if (err) {
      res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    next();
  })
});
router.get('/:id', function (req, res) {
  incomeController.getall(req, res, req.params.id);

});
router.post('/', function (req, res) {
  incomeController.create(req, res, req.body.category, req.body.amount, req.body.user_id, req.body.comment, req.body.date);

});
router.put('/:id', function (req, res) {
  incomeController.update(req, res, req.params.user_id, req.body)
});
router.delete('/', function (req, res) {
  incomeController.remove(req, res, req.body.user_id);
});
module.exports = router;
